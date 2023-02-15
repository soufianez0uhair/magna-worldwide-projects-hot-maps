function SplitScreen({children}) {
  const [Left, Right] = children;
  return (
    <div className="SplitScreen">
      <div className="SplitScreen__left">
        {Left}
      </div>
      <div className="SplitScreen__right">
        <Right />
      </div>
    </div>
  )
}

export default SplitScreen;