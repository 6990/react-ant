export default [
    {
        path: '/home',
        name: 'home',
        label: 'Home Page',
        icon: 'DashboardOutlined',
        url: '/home/index'
    },
    {
        path: '/user',
        name: 'user',
        label: 'user Page',
        icon: 'SettingOutlined',
        url: '/user/index'
    },
    {
        path: '/other',
        label: 'Other',
        icon: 'DatabaseOutlined',
        children: [
            {
                path: '/other/one',
                name: 'one',
                label: 'One Page',
                icon: 'ControlOutlined',
                url: '/other/one'
            },{
                path: '/other/two',
                name: 'two',
                label: 'two Page',
                icon: 'DeploymentUnitOutlined',
                url: '/other/two'
            }
        ]
    }
]