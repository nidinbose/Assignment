import Booking from '../modeles/appoinment.model.js'

export async function addAppoinment(req, res) {
  try {
    const { name, date, time, status, doctorId } = req.body
    if (!name || !date || !time || !status || !doctorId) {
      return res.status(400).json({ success: false, message: "All fields are required" })
    }
    const existing = await Booking.findOne({ doctorId, date, time })
    if (existing) {
      return res.status(409).json({
        success: false,
        message: "Slot already booked",
      })
    }
    const newBooking = new Booking({
      name,
      date,
      time,
      status,
      doctorId,
    })
    await newBooking.save()
    return res.status(200).json({
      success: true,
      message: "Appointment booked successfully",
      booking: newBooking,
    })
  } catch (error) {
    console.error("Appointment booking error:", error)
    return res.status(500).json({
      success: false,
      message: "Internal server error while booking appointment",
    })
  }
}

export async function getAppointments(req, res) {
  try {
    const { id: doctorId } = req.params;

    const data = await Booking.find({ doctorId }); 

    if (!data || data.length === 0) {
      return res.status(404).send("No appointments available");
    } else {
      return res.status(200).send(data);
    }
  } catch (error) {
    console.error("Error fetching appointments:", error);
    return res.status(500).send("Error fetching appointments");
  }
}
