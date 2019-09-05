import { Schema, model } from 'mongoose';

const PlanetSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  climate: {
    type: String,
    required: true,
  },

  terrain: {
    type: String,
    required: true,
  },

  films: {
    type: Number,
    required: true,
  },
},
  {
    timestamps: true,
  }
);

export default model('Planet', PlanetSchema);
