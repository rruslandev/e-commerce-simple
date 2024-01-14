import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { cartSlice } from '../store/slice';

const rootActions = {
	...cartSlice.actions,
};

export const useActions = () => {
	const dispatch = useDispatch();

	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
