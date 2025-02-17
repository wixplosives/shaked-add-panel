import { createBoard } from '@wixc3/react-board';
import { FormButton } from '../../../components/form-button/form-button';
import submit from '../../../assets/Submit.png';

export default createBoard({
    name: 'Submit-Button',
    Board: () => <FormButton variant={'primary'} content={'Submit'} />,
    environmentProps: {
        windowWidth: 1024,
    },
    cover: submit,
});
