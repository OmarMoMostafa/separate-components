import CollabseBtn from "./components/CollabseBtn/CollabseBtn";

function App() {
  return (
    <>
      <CollabseBtn
        collabseText="show less"
        expandText="show more"
        color="#f00"
        numWordsExpanded={20}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim animi
        facere minus nobis cumque voluptatum voluptas obcaecati, placeat
        tenetur, veritatis, aut accusamus. Corporis, distinctio dicta! Animi
        enim deserunt eaque hic?
      </CollabseBtn>
    </>
  );
}

export default App;
