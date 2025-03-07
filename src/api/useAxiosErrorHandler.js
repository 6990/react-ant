import { useDispatch } from 'react-redux';
import { setNotifacation } from '../store/reducers/notifacation';

const useAxiosErrorHandler = () => {
    const dispatch = useDispatch();
    return (error) => {
        let errorMessage = 'An unknown error occurred';
        if (error.response) {
            // 请求已发出，服务器响应了状态码但不在 2xx 范围内
            errorMessage = error.response.data.message || 'Server responded with an error';
        } else if (error.request) {
            // 请求已发出，但没有收到响应，比如网络问题
            errorMessage = 'No response received from the server. Please check your network connection.';
        }
        dispatch(setNotifacation({
            show: true,
            message: error.code,
            description: errorMessage,
            type: 'error',
            showIcon: true,
            closable: true
        }));
    };
};

export default useAxiosErrorHandler;