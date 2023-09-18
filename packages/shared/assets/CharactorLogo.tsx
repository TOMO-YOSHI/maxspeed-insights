import React from 'react';

export interface CharactorLogo {
  altText?: string;
}

export const CharactorLogo: React.FC<CharactorLogo> = ({ altText = 'Charactor Logo' }) => {
  return (
    <div aria-label={altText}>
      <svg width="45" height="36" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32.6252 12.8706C30.9602 12.8706 29.612 14.2204 29.612 15.8847C29.612 17.5489 30.9602 18.8987 32.6252 18.8987C34.2886 18.8987 35.6392 17.5489 35.6392 15.8847C35.6392 14.2204 34.2886 12.8706 32.6252 12.8706ZM12.7315 12.8706C11.0657 12.8706 9.7175 14.2204 9.7175 15.8847C9.7175 17.5489 11.0665 18.8987 12.7315 18.8987C14.3958 18.8987 15.7448 17.5489 15.7448 15.8847C15.7448 14.2204 14.3958 12.8706 12.7315 12.8706ZM4.33815 9.07056C3.7498 8.47982 3.45681 7.70647 3.45681 6.93787C3.45681 6.16531 3.7498 5.39275 4.33815 4.80439C4.92968 4.21683 5.69907 3.92385 6.47084 3.92385C7.2434 3.92385 8.01596 4.21683 8.60352 4.80439L7.89924 5.32446C11.978 2.15243 17.1073 0.257156 22.678 0.257156C28.2503 0.257156 33.3724 2.15164 37.4567 5.32446L36.7548 4.80678C37.3431 4.21842 38.1133 3.92544 38.8875 3.92544C39.6577 3.92544 40.431 4.21842 41.0178 4.80678C41.6038 5.39831 41.8967 6.17087 41.8967 6.93946C41.8967 7.71282 41.6061 8.48458 41.0178 9.07294L41.7213 9.58983C51.9123 19.78 34.5665 24.3686 34.5665 24.3686H10.7902C10.29 24.3686 -7.26616 20.4907 3.63546 9.58983L4.33815 9.07056Z" fill="url(#paint0_linear_1_3)" />
        <path d="M38.5723 35.132C36.5476 35.132 34.9064 33.4908 34.9064 31.4653C34.9064 29.4406 36.5476 27.7994 38.5723 27.7994C40.597 27.7994 42.2382 29.4406 42.2382 31.4653C42.239 33.4908 40.597 35.132 38.5723 35.132Z" fill="url(#paint1_linear_1_3)" />
        <path d="M8.45109 35.4655C6.42559 35.4655 4.78439 33.8243 4.78439 31.7988C4.78439 29.7741 6.42559 28.1329 8.45109 28.1329C10.4766 28.1329 12.1178 29.7741 12.1178 31.7988C12.1178 33.8243 10.4766 35.4655 8.45109 35.4655Z" fill="url(#paint2_linear_1_3)" />
        <path d="M11.7097 25.126H33.7241C33.7241 25.126 23.0512 28.7943 11.7097 25.126Z" fill="url(#paint3_linear_1_3)" />
        <defs>
          <linearGradient id="paint0_linear_1_3" x1="0.073822" y1="0.257156" x2="44.9295" y2="0.257156" gradientUnits="userSpaceOnUse">
            <stop stop-color="#00FF8F" />
            <stop offset="1" stop-color="#00A1FF" />
          </linearGradient>
          <linearGradient id="paint1_linear_1_3" x1="34.9064" y1="27.7994" x2="42.2382" y2="27.7994" gradientUnits="userSpaceOnUse">
            <stop stop-color="#00FF8F" />
            <stop offset="1" stop-color="#00A1FF" />
          </linearGradient>
          <linearGradient id="paint2_linear_1_3" x1="4.78439" y1="28.1329" x2="12.1178" y2="28.1329" gradientUnits="userSpaceOnUse">
            <stop stop-color="#00FF8F" />
            <stop offset="1" stop-color="#00A1FF" />
          </linearGradient>
          <linearGradient id="paint3_linear_1_3" x1="11.7097" y1="25.126" x2="33.7241" y2="25.126" gradientUnits="userSpaceOnUse">
            <stop stop-color="#00FF8F" />
            <stop offset="1" stop-color="#00A1FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
