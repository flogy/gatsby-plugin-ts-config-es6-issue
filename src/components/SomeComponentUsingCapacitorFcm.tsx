import React from "react"
import { FCM } from "capacitor-fcm"

const fcm = new FCM()

export const startUrl = `/`

export default () => (
  <div>
    <p>SomeComponentUsingCapacitorFcm</p>
  </div>
)
