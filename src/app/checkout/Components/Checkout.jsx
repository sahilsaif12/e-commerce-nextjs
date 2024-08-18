import React from 'react'
import { clearCart } from '@/features/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
function Checkout() {
    
    let date=new Date().toDateString();
    const finalAmount = useSelector((state) => state.cart.finalAmount)
    const dispatch = useDispatch()
    dispatch(clearCart())

  return (
    <div>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800 p-4">
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-sm w-full text-center">
        <div class="text-green-500 mb-4">
            <svg class="w-24 h-24 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2l4-4"></path>
            </svg>
        </div>
        
        <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Payment successful</h1>
        <p class="text-gray-600 dark:text-gray-400 mt-2">Your order has been confirmed and is being processed. You will receive an email confirmation shortly.</p>

        <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mt-6">
            <div class="flex justify-between text-gray-900 dark:text-gray-200">
                <span>Order number</span>
                <span>#123456</span>
            </div>
            <div class="flex justify-between text-gray-900 dark:text-gray-200 mt-2">
                <span>Date</span>
                <span>{date}</span>
            </div>
            <div class="flex justify-between font-semibold text-gray-900 dark:text-gray-200 mt-2">
                <span>Final amount</span>
                <span>$ {finalAmount}</span>
            </div>
        </div>

    </div>
</div>

    </div>
  )
}

export default Checkout