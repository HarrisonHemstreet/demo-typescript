import { useTypedSelector } from "../hooks/use-type-selector";

const CellList: React.FC = () => {
	const cells = useTypedSelector(( { cells: { order, data } }) => order.map((id) => data[id]));

	return <div>CELL LIST</div>;
};

export default CellList;
