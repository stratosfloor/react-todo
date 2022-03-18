function TaskItem({ completed, label }) {
  // const label = props.label;
  // const { label } = props;
  return (
    <li className={completed ? "completed" : null}>
      <span className="label">{ label }</span>
      <span className="trashcan">🗑️</span>
    </li>
  );
}

export default TaskItem;
