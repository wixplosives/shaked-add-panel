import { createBoard } from '@wixc3/react-board';
import { FormInput } from '../../../components/input/input';
import emailInput from '../../../assets/email-input.png';

export default createBoard({
    name: 'Email-Input',
    Board: () => <FormInput type={'text'} label={'Email'} />,
    cover: emailInput,
    environmentProps: {
        windowHeight: 640,
    },
});
