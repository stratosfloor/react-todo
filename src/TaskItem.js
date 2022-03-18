function TaskItem({ completed, label, onClickTask, onClickTrashcan }) {
  // const label = props.label;
  // const { label } = props;
  return (
    <li className={completed ? "completed" : null}>
      <span className="label" onClick={onClickTask}>{ label }</span>
      <span className="trashcan" onClick={onClickTrashcan}>🗑️</span>
    </li>
  );
}

export default TaskItem;
