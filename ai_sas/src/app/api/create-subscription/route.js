// /api/create-subscription
'use client'
import { NextResponse } from 'next/server'
import Razorpay from 'razorpay'

export async function POST(){
 let instnace = new Razorpay({
    key_id:process.env.RAZORPAY_KEY_ID,
    key_secret:process.env.RAZORPAY_SECRET_KEY
    })

const result = await instnace.subscriptions.create({
    plan_id:process.env.RAZORPAY_PLAN_ID,
    customer_notify:1,
    quantity:1,
    total_count:1,
    addons:[],
    notes:{
        key1:"NOTE"
    }
    })

    return NextResponse.json(result);

}