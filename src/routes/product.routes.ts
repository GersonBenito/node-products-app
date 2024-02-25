import { Router } from 'express';
import { getEntries, addEntry, getEntryById, deleteEntryById, updateEntryById } from './../controller/product.controlller';

const router = Router();

router.get('/', getEntries);
router.post('/', addEntry);
router.get('/:id', getEntryById);
router.delete('/:id', deleteEntryById);
router.put('/:id', updateEntryById);

export default router;