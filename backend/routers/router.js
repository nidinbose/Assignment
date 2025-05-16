import { Router } from "express";
import * as prj from '../countrollers/doctorCountroller.js'
import * as booking from '../countrollers/bookingCountrollers.js'

const router=Router()

router.route('/adddoctor').post(prj.addHello)
router.route('/getdoctor').get(prj.getHello)
router.route('/getdoctorId/:id').get(prj.getHelloById)
router.route('/updatedoctor/:id').put(prj.updateById)
router.route('/deletedoctor/:id').delete(prj.deleteDoctor)
router.route('/getappoinment').get(booking.getBookings)
router.route('/addbooking').post(booking.addAppoinment)
router.route('/getbookings/:id').get(booking.getAppointments)

export default router