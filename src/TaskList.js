import TaskItem from "./TaskItem";

function TaskList({ tasks, onClickTask, onClickTrashcan }) {

  const taskElements = tasks.map((task) => {

    const returnCompletedTask = () => {
      onClickTask(task);
    }

    const returnTaskToFilter = () => {
      onClickTrashcan(task);
    }
    
    return (
      <TaskItem
        key={task.label}
        label={task.label}
        completed={task.completed}
        onClickTask={returnCompletedTask}
        onClickTrashcan={returnTaskToFilter}
      />
    );
  });

  return <ul>{taskElements}</ul>;
}

export default TaskList;
