import { useTypeSelector } from "../hooks/use-type-selector";

const CellList: React.FC = () => {
	useTypeSelector((state) => state);
	return <div>CELL LIST</div>;
};

export default CellList;
