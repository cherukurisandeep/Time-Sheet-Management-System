import mongoose from 'mongoose';

const _personSchema = {
  somethingSomething: {type: String, required: true, trim: true},
  createdAt: {type: Date, default: Date.now}
}

export default mongoose.Schema(_personSchema);
