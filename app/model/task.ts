export default (app: any) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const TaskSchema = new Schema({
    name: { type: String },
  });

  return mongoose.model('Task', TaskSchema);
};
