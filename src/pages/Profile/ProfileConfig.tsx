import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import HomeIcon from '@material-ui/icons/Home';
import BusinessIcon from '@material-ui/icons/Business';

export const profileConfig = [
    { 
        icon: <AssignmentIndIcon />,
        title: 'Personal information',
        inputNames: [
            { name: 'Name', apiName: 'name', type: 'text', id: '1' }, 
            { name: 'Phone', apiName: 'phone', type: 'phone', id: '2' }, 
            { name: 'Username', apiName: 'username', type: 'text', id: '3' }, 
            { name: 'Website', apiName: 'website', type: 'url', id: '4' },
            { name: 'E-mail', apiName: 'email', type: 'email', id: '5' }, 
        ],
        col: 2,
        id: 11,
    },
    { 
        icon: <HomeIcon />,
        title: 'address',
        inputNames: [
            { name: 'Street', apiName: 'street', type: 'text', id: '11' }, 
            { name: 'City', apiName: 'city', type: 'text', id: '12' }, 
            { name: 'Suite', apiName: 'suite', type: 'text', id: '13' }, 
            { name: 'Zipcode', apiName: 'zipcode', type: 'text', id: '14' }, 
        ],
        col: 2,
        id: 12,
    },
    { 
        icon: <BusinessIcon />,
        title: 'company',
        inputNames: [
            { name: 'Name', apiName: 'name', type: 'text', id: '21' }, 
            { name: 'Catch Phrase', apiName: 'catchPhrase', type: 'text', id: '22' }, 
            { name: 'Bs', apiName: 'bs', type: 'text', id: '23' },
        ],
        col: 1,
        id: 13,
    }
];
