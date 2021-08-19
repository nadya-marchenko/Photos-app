import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import HomeIcon from '@material-ui/icons/Home';
import BusinessIcon from '@material-ui/icons/Business';

export const API_URL = `https://jsonplaceholder.typicode.com`;

export const perPageOptions = [7, 10, 20, 30, 40, 60];

export const profileData = [
    { 
        icon: <AssignmentIndIcon />,
        title: 'Personal information',
        inputNames: [
            { name: 'Name', type: 'text', id: '1' }, 
            { name: 'Phone', type: 'phone', id: '2' }, 
            { name: 'Username', type: 'text', id: '3' }, 
            { name: 'Website', type: 'url', id: '4' },
            { name: 'E-mail', type: 'email', id: '5' }, 
        ],
        col: 2,
        id: 11,
    },
    { 
        icon: <HomeIcon />,
        title: 'Address',
        inputNames: [
            { name: 'Street', type: 'text', id: '11' }, 
            { name: 'City', type: 'text', id: '12' }, 
            { name: 'Suite', type: 'text', id: '13' }, 
            { name: 'Zipcode', type: 'number', id: '14' }, 
        ],
        col: 2,
        id: 12,
    },
    { 
        icon: <BusinessIcon />,
        title: 'Company',
        inputNames: [
            { name: 'Name', type: 'text', id: '21' }, 
            { name: 'Catch phrase', type: 'text', id: '22' }, 
            { name: 'Bs', type: 'text', id: '23' },
        ],
        col: 1,
        id: 13,
    }
];
