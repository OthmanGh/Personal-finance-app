import { Button, HeaderDefaultLayout, PotsContainer } from '../constants';
const Pots = () => {
  return (
    <div className="flex flex-col gap-400">
      <div className="flex flex-row items-center justify-center">
        <HeaderDefaultLayout>Pots</HeaderDefaultLayout>
        <Button type="button">+ Add New Budget</Button>
      </div>

      <PotsContainer />
    </div>
  );
};

export default Pots;
