const mongoose = require('mongoose');
const CustomError = require('../../errors/CustomError');

const ReservationSchema = new mongoose.Schema({
  reservationId: {
    type: String,
    required: false,
  },
  userId: {
    type: String,
    required: true,
  },
  tableNumber: {
    type: Number,
    required: false,
  },
  date: {
    type: Date,
    requied: true,
  },
  startTime: {
    type: Number,
    required: true,
  },
  endTime: {
    type: Number,
    required: true,
  },
});

ReservationSchema.set('toJSON', {
  transform: (doc, ret, option) => {
    delete ret.__v;
    delete ret._id;
    return ret;
  },
});

ReservationSchema.pre('save', async function (next) {
  const id = Math.floor(Math.random() * 900000 + 10000);
  for (let i = 1; i <= 3; i++) {
    const overlappingReservation = await ReservationModel.findOne({
      date: this.date,
      tableNumber: i,
      $or: [
        {
          startTime: { $lt: this.endTime },
          endTime: { $gt: this.startTime },
        },
        {
          startTime: { $lt: this.startTime },
          endTime: { $gt: this.endTime },
        },
      ],
    });

    if (!overlappingReservation) {
      this.tableNumber = i;
      break;
    }
  }

  if (!this.tableNumber) {
    throw new CustomError('No available table for this time slot');
  }
  this.reservationId = id;
  next();
});

const ReservationModel = mongoose.model('ReservationModel', ReservationSchema);

module.exports = ReservationModel;
