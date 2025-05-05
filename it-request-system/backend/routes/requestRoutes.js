const express = require('express');
const router = express.Router();
const requestController = require('../controllers/requestController');

// Debug imports
console.log('Controller functions:', {
  submitRequest: typeof requestController.submitRequest,
  handleApproval: typeof requestController.handleApproval,
  getAllRequests: typeof requestController.getAllRequests,
  updateRequestStatus: typeof requestController.updateRequestStatus
});

router.post('/submit', requestController.submitRequest);
router.get('/approve', requestController.handleApproval);
router.get('/requests', requestController.getAllRequests);
router.put('/requests/:id/status', requestController.updateRequestStatus);

module.exports = router;