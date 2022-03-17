function TaskItem({ label }) {
  // const label = props.label;
  // const { label } = props;
  return (
    <li>
      <span className="label">{ label }</span>
      <span className="trashcan">🗑️</span>
    </li>
  );
}

export default TaskItem;
