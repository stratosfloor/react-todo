function Count({ tasks }) {
  const completedCount = tasks.filter(task => task.completed).length
  return (
    <p className="counter">{ completedCount } completed</p>
  );
}

export default Count;