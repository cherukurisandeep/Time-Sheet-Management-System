import mongoose from 'mongoose';

const _timesheetentrySchema = {
  somethingSomething: {type: String, required: true, trim: true},
  createdAt: {type: Date, default: Date.now}
}

export default mongoose.Schema(_timesheetentrySchema);
