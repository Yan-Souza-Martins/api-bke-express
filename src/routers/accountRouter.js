import express from 'express'

import createController from '../controllers/account/createController.js'
import deleteByIdController from '../controllers/account/deleteByIdController.js'
import getByIdController from '../controllers/account/GETbyidController.js'
import listController from '../controllers/account/listController.js'
import updateByIdController from '../controllers/account/updateController.js'

const router = express.Router()

router.post('/account', createController)

router.get('/list', listController)

router.get('/:id', getByIdController)

router.put('/:id', updateByIdController)

router.delete('/:id', deleteByIdController)

export default router