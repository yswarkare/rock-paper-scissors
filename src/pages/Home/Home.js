import { useContextState, useUpdateContextState } from '../../hooks/ContextState';
import ChooseMove from '../ChooseMove/ChooseMove';
import ShowResult from '../ShowResult/ShowResult';
import SelectPlayers from '../SelectPlayers/SelectPlayers';

const Home = () => {
	const currentPage = useContextState().currentPage;
	// const updateContextState = useUpdateContextState();

	return (
		<div className='container home-page'>
			<div className={`container`}>
				{currentPage === 'Select_Players' && <SelectPlayers />}
				{currentPage === 'Choose_Move' && <ChooseMove />}
				{currentPage === 'Result' && <ShowResult />}
			</div>
		</div>
	);
};

export default Home;
