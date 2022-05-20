import React, { FC } from "react"
import "./Loading.css"
import { Spinner } from "./LoadingStyle"

interface LoadingProps {}

const Loading: FC<LoadingProps> = () => (
  <div className="Loading" data-testid="Loading">
    <Spinner className="loading-spinner"></Spinner>
  </div>
)

export default Loading
