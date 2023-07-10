import { createBoard } from '@wixc3/react-board';
import { Header } from '../../../components/header/header';

export default createBoard({
    name: 'Codux-Header',
    Board: () => <Header title={'Codux'} />,
});
