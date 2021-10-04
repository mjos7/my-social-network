const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  addThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thought-controller');

router.route('/').get(getAllThoughts).post(addThought);

// /api/thoughts/<userId>
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought);

// /api/<thoughtId>/<reactions
router.route('/:thoughtId/reactions').post(addReaction).delete(removeReaction);

module.exports = router;
