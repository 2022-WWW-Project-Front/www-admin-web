import React from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'

interface location {
  hash: string
  key: string
  pathname: string
  search: string
  state: string | null
}

const Photo = () => {
  const location: location = useLocation()

  return (
    <>
      {location.pathname == '/RegisterStep2' ? (
        <PhotoSize>
          <svg width="6vh" height="6vh" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M55 47C55 49.7615 52.7615 52 50 52H10C7.23857 52 5 49.7615 5 47V21C5 18.2386 7.23857 16 10 16H17.5L23.75 7H36.25L42.5 16H50C52.7615 16 55 18.2386 55 21V47ZM22 32.5C22 28.0817 25.5817 24.5 30 24.5C34.4183 24.5 38 28.0817 38 32.5C38 36.9183 34.4183 40.5 30 40.5C25.5817 40.5 22 36.9183 22 32.5ZM30 20.5C23.3726 20.5 18 25.8726 18 32.5C18 39.1274 23.3726 44.5 30 44.5C36.6274 44.5 42 39.1274 42 32.5C42 25.8726 36.6274 20.5 30 20.5Z"
              fill="#1635F4"
            />
          </svg>
        </PhotoSize>
      ) : (
        <PhotoSize>
          <svg width="6vh" height="6vh" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_371_3354" maskUnits="userSpaceOnUse" x="9" y="12" width="41" height="41">
              <path d="M9.16211 12.6621H49.8378V52.1756H9.16211V12.6621Z" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_371_3354)">
              <path
                d="M19.8115 31.8966L8.17812 47.443C8.06216 47.598 8 47.7822 8 47.971V67.5754C8 68.086 8.44531 68.5 8.99464 68.5H52.0053C52.5854 68.5 53.0424 68.0404 52.9969 67.5029L51.6375 51.4442C51.6157 51.186 51.4782 50.9481 51.2587 50.7885L41.2033 43.4784C40.8107 43.193 40.2516 43.2217 39.8952 43.5456L36.1213 46.975C35.7038 47.3544 35.0261 47.3195 34.6563 46.8994L21.3978 31.839C20.9796 31.364 20.1886 31.3927 19.8115 31.8966Z"
                fill="#1635F4"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.9924 31.2963C19.7467 30.2846 21.329 30.2269 22.1656 31.1807L35.4271 46.2995L39.2019 42.8568C39.9148 42.2066 41.0333 42.149 41.8185 42.7219L51.8762 50.0604C52.3154 50.3808 52.5903 50.8585 52.6341 51.377L53.9937 67.498C54.0848 68.5773 53.1706 69.5 52.0102 69.5H8.98973C7.89083 69.5 7 68.6689 7 67.6436V47.9631C7 47.5841 7.12434 47.2142 7.35631 46.903L18.9924 31.2963ZM33.8873 47.4752L20.6258 32.3564L8.98973 47.9631V67.6436H52.0102L50.6505 51.5227L40.5928 44.1842L36.818 47.627C35.9827 48.3888 34.6271 48.3186 33.8873 47.4752Z"
                fill="#1635F4"
              />
            </g>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M36 11.5H11C9.34315 11.5 8 12.8431 8 14.5V51.5C8 53.1569 9.34314 54.5 11 54.5H48C49.6569 54.5 51 53.1569 51 51.5V27.5H47V50.5H12V15.5H36V11.5Z"
              fill="#1635F4"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M46 15.5V21H50V15.5H55.5V11.5H50V6.5H46V11.5H41V15.5H46Z"
              fill="#1635F4"
            />
          </svg>
        </PhotoSize>
      )}
    </>
  )
}

const PhotoSize = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100vh * 18 / 100);
  height: calc(100vh * 18 / 100);
  background-color: #e9ecf8;
`

export default Photo
