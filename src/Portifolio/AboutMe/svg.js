
import { useContext } from "react"
import { AlteracaoThema } from "../../contexts/Themas"
import HtmlAndCss from './Icon.png'
export function SvgAbout1() {
    const { darkModeThem } = useContext(AlteracaoThema);
    return (
        <svg width="100%" height="alto" viewBox="0 0 124 103" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.9327 64V54.8045H33.7784V55.9343H29.3251V58.798H33.3843V59.9015H29.3251V62.8703H33.7784V64H27.9327ZM34.7543 64L37.0663 60.7422L34.7543 57.4844H36.2387L37.9858 59.9803L39.7198 57.4844H41.2173L38.9053 60.7422L41.2173 64H39.7198L37.9858 61.5041L36.2387 64H34.7543ZM42.3507 66.89V57.4844H43.5986L43.7431 58.4959C43.9533 58.1893 44.2423 57.9179 44.6101 57.6814C44.9779 57.445 45.4508 57.3267 46.0288 57.3267C46.6594 57.3267 47.2155 57.4756 47.6972 57.7734C48.1788 58.0711 48.5554 58.4783 48.8269 58.995C49.1071 59.5117 49.2473 60.0985 49.2473 60.7553C49.2473 61.4121 49.1071 61.9989 48.8269 62.5156C48.5554 63.0235 48.1788 63.4264 47.6972 63.7241C47.2155 64.0131 46.655 64.1576 46.0157 64.1576C45.5078 64.1576 45.0568 64.0569 44.6627 63.8555C44.2773 63.6541 43.9708 63.3695 43.7431 63.0016V66.89H42.3507ZM45.7793 62.9491C46.3748 62.9491 46.8652 62.7477 47.2505 62.3448C47.6359 61.9332 47.8285 61.399 47.8285 60.7422C47.8285 60.3131 47.7409 59.9321 47.5658 59.5993C47.3906 59.2665 47.1498 59.0082 46.8433 58.8243C46.5368 58.6316 46.1821 58.5353 45.7793 58.5353C45.1837 58.5353 44.6933 58.7411 44.308 59.1527C43.9314 59.5643 43.7431 60.0941 43.7431 60.7422C43.7431 61.399 43.9314 61.9332 44.308 62.3448C44.6933 62.7477 45.1837 62.9491 45.7793 62.9491ZM53.801 64.1576C53.1616 64.1576 52.5924 64.0175 52.0932 63.7373C51.6028 63.4483 51.2175 63.0498 50.9372 62.5419C50.657 62.0339 50.5169 61.4428 50.5169 60.7685C50.5169 60.0854 50.6526 59.4855 50.9241 58.9688C51.2043 58.4521 51.5897 58.0492 52.0801 57.7602C52.5793 57.4712 53.1573 57.3267 53.8141 57.3267C54.4534 57.3267 55.0095 57.4712 55.4824 57.7602C55.9553 58.0405 56.3231 58.417 56.5859 58.89C56.8486 59.3629 56.98 59.8839 56.98 60.4532C56.98 60.5408 56.9756 60.6371 56.9668 60.7422C56.9668 60.8385 56.9624 60.948 56.9537 61.0706H51.883C51.9268 61.7011 52.1326 62.1828 52.5005 62.5156C52.877 62.8396 53.3105 63.0016 53.801 63.0016C54.195 63.0016 54.5235 62.9141 54.7862 62.7389C55.0577 62.555 55.2591 62.3098 55.3905 62.0033H56.7829C56.6078 62.6163 56.2575 63.1286 55.732 63.5402C55.2153 63.9518 54.5716 64.1576 53.801 64.1576ZM53.801 58.4696C53.3368 58.4696 52.9252 58.6097 52.5661 58.89C52.2071 59.1614 51.9881 59.573 51.9093 60.1248H55.5875C55.5612 59.6168 55.3817 59.214 55.0489 58.9162C54.7161 58.6185 54.3001 58.4696 53.801 58.4696ZM58.4247 64V57.4844H59.6727L59.7909 58.7192C60.0186 58.2901 60.3339 57.9529 60.7367 57.7077C61.1484 57.4537 61.6432 57.3267 62.2212 57.3267V58.7849H61.8402C61.4549 58.7849 61.1089 58.8505 60.8024 58.9819C60.5047 59.1045 60.2638 59.3191 60.0799 59.6256C59.9048 59.9233 59.8172 60.3393 59.8172 60.8735V64H58.4247ZM64.2032 56.2495C63.9405 56.2495 63.7215 56.1707 63.5464 56.0131C63.38 55.8467 63.2968 55.6409 63.2968 55.3957C63.2968 55.1505 63.38 54.949 63.5464 54.7914C63.7215 54.625 63.9405 54.5418 64.2032 54.5418C64.4659 54.5418 64.6805 54.625 64.8469 54.7914C65.022 54.949 65.1096 55.1505 65.1096 55.3957C65.1096 55.6409 65.022 55.8467 64.8469 56.0131C64.6805 56.1707 64.4659 56.2495 64.2032 56.2495ZM63.507 64V57.4844H64.8994V64H63.507ZM69.7852 64.1576C69.1459 64.1576 68.5767 64.0175 68.0775 63.7373C67.5871 63.4483 67.2018 63.0498 66.9215 62.5419C66.6413 62.0339 66.5011 61.4428 66.5011 60.7685C66.5011 60.0854 66.6369 59.4855 66.9084 58.9688C67.1886 58.4521 67.5739 58.0492 68.0644 57.7602C68.5636 57.4712 69.1416 57.3267 69.7984 57.3267C70.4377 57.3267 70.9938 57.4712 71.4667 57.7602C71.9396 58.0405 72.3074 58.417 72.5701 58.89C72.8329 59.3629 72.9642 59.8839 72.9642 60.4532C72.9642 60.5408 72.9599 60.6371 72.9511 60.7422C72.9511 60.8385 72.9467 60.948 72.938 61.0706H67.8673C67.9111 61.7011 68.1169 62.1828 68.4847 62.5156C68.8613 62.8396 69.2948 63.0016 69.7852 63.0016C70.1793 63.0016 70.5077 62.9141 70.7705 62.7389C71.0419 62.555 71.2434 62.3098 71.3747 62.0033H72.7672C72.592 62.6163 72.2417 63.1286 71.7163 63.5402C71.1996 63.9518 70.5559 64.1576 69.7852 64.1576ZM69.7852 58.4696C69.3211 58.4696 68.9095 58.6097 68.5504 58.89C68.1914 59.1614 67.9724 59.573 67.8936 60.1248H71.5718C71.5455 59.6168 71.366 59.214 71.0332 58.9162C70.7004 58.6185 70.2844 58.4696 69.7852 58.4696ZM74.409 64V57.4844H75.6439L75.7489 58.6272C75.9504 58.2244 76.2437 57.9091 76.6291 57.6814C77.0232 57.445 77.4742 57.3267 77.9821 57.3267C78.7703 57.3267 79.3877 57.5719 79.8344 58.0624C80.2897 58.5528 80.5174 59.284 80.5174 60.2561V64H79.1381V60.4006C79.1381 59.1395 78.6214 58.509 77.588 58.509C77.0713 58.509 76.6422 58.6929 76.3007 59.0607C75.9679 59.4285 75.8015 59.954 75.8015 60.6371V64H74.409ZM85.2445 64.1576C84.6052 64.1576 84.0316 64.0131 83.5236 63.7241C83.0244 63.4351 82.6303 63.0367 82.3413 62.5287C82.0611 62.012 81.921 61.4165 81.921 60.7422C81.921 60.0678 82.0611 59.4767 82.3413 58.9688C82.6303 58.4521 83.0244 58.0492 83.5236 57.7602C84.0316 57.4712 84.6052 57.3267 85.2445 57.3267C86.0502 57.3267 86.7245 57.5369 87.2675 57.9573C87.8192 58.3776 88.1739 58.9469 88.3315 59.665H86.8734C86.7858 59.3059 86.5931 59.0257 86.2954 58.8243C85.9976 58.6228 85.6473 58.5221 85.2445 58.5221C84.9029 58.5221 84.5877 58.6097 84.2987 58.7849C84.0097 58.9513 83.7776 59.2008 83.6024 59.5336C83.4273 59.8577 83.3397 60.2605 83.3397 60.7422C83.3397 61.2238 83.4273 61.6311 83.6024 61.9639C83.7776 62.2879 84.0097 62.5375 84.2987 62.7126C84.5877 62.8878 84.9029 62.9754 85.2445 62.9754C85.6473 62.9754 85.9976 62.8747 86.2954 62.6732C86.5931 62.4718 86.7858 62.1872 86.8734 61.8194H88.3315C88.1826 62.52 87.8323 63.0848 87.2806 63.514C86.7289 63.9431 86.0502 64.1576 85.2445 64.1576ZM92.8893 64.1576C92.25 64.1576 91.6808 64.0175 91.1816 63.7373C90.6912 63.4483 90.3058 63.0498 90.0256 62.5419C89.7454 62.0339 89.6052 61.4428 89.6052 60.7685C89.6052 60.0854 89.741 59.4855 90.0125 58.9688C90.2927 58.4521 90.678 58.0492 91.1685 57.7602C91.6676 57.4712 92.2456 57.3267 92.9025 57.3267C93.5418 57.3267 94.0979 57.4712 94.5708 57.7602C95.0437 58.0405 95.4115 58.417 95.6742 58.89C95.937 59.3629 96.0683 59.8839 96.0683 60.4532C96.0683 60.5408 96.0639 60.6371 96.0552 60.7422C96.0552 60.8385 96.0508 60.948 96.0421 61.0706H90.9714C91.0152 61.7011 91.221 62.1828 91.5888 62.5156C91.9654 62.8396 92.3989 63.0016 92.8893 63.0016C93.2834 63.0016 93.6118 62.9141 93.8746 62.7389C94.146 62.555 94.3475 62.3098 94.4788 62.0033H95.8713C95.6961 62.6163 95.3458 63.1286 94.8204 63.5402C94.3037 63.9518 93.66 64.1576 92.8893 64.1576ZM92.8893 58.4696C92.4252 58.4696 92.0136 58.6097 91.6545 58.89C91.2954 59.1614 91.0765 59.573 90.9977 60.1248H94.6759C94.6496 59.6168 94.4701 59.214 94.1373 58.9162C93.8045 58.6185 93.3885 58.4696 92.8893 58.4696Z" fill={darkModeThem ? "#FFFFFF" : "black"} />
            <rect x="0.5" y="0.5" width="123" height="102" rx="15.5" stroke="#D4D4D4" />
            <path d="M40.595 84V77.531L39.3346 77.821V76.951L41.0634 76.1925H41.8218V84H40.595ZM46.0956 81.2562V80.2636H48.2036V78.2894H49.2297V80.2636H51.3377V81.2562H49.2297V83.2416H48.2036V81.2562H46.0956ZM56.2095 86.4538L57.5368 83.5427H57.2133L55.0273 78.4679H56.3099L58.0052 82.5612L59.7787 78.4679H61.0278L57.4587 86.4538H56.2095ZM64.0864 84.1338C63.5436 84.1338 63.0603 84.0149 62.6365 83.7769C62.2201 83.5316 61.8929 83.1932 61.655 82.762C61.417 82.3307 61.2981 81.8288 61.2981 81.2562C61.2981 80.6763 61.4133 80.1669 61.6438 79.7282C61.8818 79.2895 62.2089 78.9475 62.6253 78.7021C63.0492 78.4567 63.5399 78.334 64.0976 78.334C64.6404 78.334 65.1126 78.4567 65.5141 78.7021C65.9156 78.94 66.2279 79.2598 66.451 79.6613C66.6741 80.0628 66.7856 80.5052 66.7856 80.9886C66.7856 81.0629 66.7819 81.1447 66.7744 81.2339C66.7744 81.3157 66.7707 81.4087 66.7633 81.5128H62.458C62.4952 82.0481 62.6699 82.4571 62.9822 82.7397C63.302 83.0148 63.67 83.1523 64.0864 83.1523C64.421 83.1523 64.6999 83.078 64.9229 82.9293C65.1535 82.7731 65.3245 82.5649 65.436 82.3047H66.6183C66.4696 82.8252 66.1721 83.2602 65.726 83.6096C65.2873 83.9591 64.7408 84.1338 64.0864 84.1338ZM64.0864 79.3044C63.6923 79.3044 63.3429 79.4233 63.038 79.6613C62.7331 79.8918 62.5472 80.2413 62.4803 80.7097H65.6033C65.581 80.2784 65.4286 79.9364 65.146 79.6836C64.8635 79.4308 64.5103 79.3044 64.0864 79.3044ZM69.8861 84.1338C69.4176 84.1338 69.031 84.0558 68.7261 83.8996C68.4213 83.7435 68.1945 83.539 68.0458 83.2862C67.897 83.0259 67.8227 82.7434 67.8227 82.4385C67.8227 81.9031 68.0309 81.4793 68.4473 81.167C68.8637 80.8547 69.4585 80.6986 70.2318 80.6986H71.6818V80.5982C71.6818 80.1669 71.5628 79.8435 71.3249 79.6278C71.0944 79.4122 70.7932 79.3044 70.4215 79.3044C70.0943 79.3044 69.808 79.3862 69.5626 79.5497C69.3247 79.7059 69.1797 79.9401 69.1277 80.2524H67.9454C67.9826 79.8509 68.1164 79.5089 68.3469 79.2263C68.5848 78.9363 68.8823 78.717 69.2392 78.5682C69.6035 78.4121 70.0013 78.334 70.4326 78.334C71.2059 78.334 71.8045 78.5385 72.2283 78.9475C72.6522 79.349 72.8641 79.8992 72.8641 80.5982V84H71.838L71.7376 83.052C71.5814 83.3568 71.3546 83.6133 71.0572 83.8215C70.7598 84.0297 70.3694 84.1338 69.8861 84.1338ZM70.1203 83.1746C70.44 83.1746 70.7077 83.1003 70.9234 82.9516C71.1464 82.7954 71.3175 82.5909 71.4364 82.3381C71.5628 82.0853 71.6409 81.8065 71.6707 81.5016H70.3545C69.8861 81.5016 69.5515 81.5834 69.3507 81.747C69.1574 81.9106 69.0607 82.1151 69.0607 82.3604C69.0607 82.6132 69.1537 82.814 69.3396 82.9627C69.5329 83.104 69.7931 83.1746 70.1203 83.1746ZM74.2426 84V78.4679H75.3022L75.4025 79.5163C75.5959 79.1519 75.8636 78.8657 76.2056 78.6575C76.5551 78.4418 76.9752 78.334 77.4659 78.334V79.5721H77.1425C76.8153 79.5721 76.5216 79.6278 76.2614 79.7394C76.0086 79.8435 75.8041 80.0256 75.6479 80.2859C75.4992 80.5387 75.4249 80.8919 75.4249 81.3455V84H74.2426ZM80.688 84.1338C79.9891 84.1338 79.4128 83.9628 78.9592 83.6208C78.5056 83.2787 78.2454 82.8252 78.1785 82.2601H79.3719C79.4314 82.5129 79.5727 82.7322 79.7957 82.9181C80.0188 83.0966 80.3125 83.1858 80.6769 83.1858C81.0338 83.1858 81.294 83.1114 81.4576 82.9627C81.6212 82.814 81.703 82.643 81.703 82.4497C81.703 82.1671 81.5877 81.9775 81.3572 81.8808C81.1341 81.7767 80.8219 81.6838 80.4203 81.602C80.108 81.5351 79.7957 81.4458 79.4834 81.3343C79.1786 81.2228 78.922 81.0666 78.7138 80.8659C78.5131 80.6577 78.4127 80.3788 78.4127 80.0293C78.4127 79.546 78.5986 79.1445 78.9704 78.8248C79.3422 78.4976 79.8626 78.334 80.5319 78.334C81.149 78.334 81.6472 78.4827 82.0264 78.7802C82.4131 79.0776 82.6399 79.4977 82.7068 80.0405H81.5691C81.532 79.8026 81.4204 79.6167 81.2345 79.4828C81.0561 79.349 80.8144 79.2821 80.5096 79.2821C80.2121 79.2821 79.9816 79.3453 79.818 79.4717C79.6544 79.5906 79.5727 79.7468 79.5727 79.9401C79.5727 80.1334 79.6842 80.2859 79.9073 80.3974C80.1378 80.5089 80.4389 80.6093 80.8107 80.6986C81.1825 80.7804 81.5245 80.877 81.8368 80.9886C82.1566 81.0927 82.4131 81.2488 82.6064 81.457C82.7997 81.6652 82.8964 81.9701 82.8964 82.3716C82.9038 82.8772 82.7068 83.2973 82.3053 83.6319C81.9112 83.9665 81.3721 84.1338 80.688 84.1338Z" fill="#A39E9E" />
            <path d="M52.9129 22.9979L53.7499 26.5629L52.9129 30.1124L56.0284 32.0344L57.9349 35.1499L61.4999 34.3129L65.0649 35.1499L66.9714 32.0344L70.0869 30.1124L69.2499 26.5629L70.0869 22.9979L66.9869 21.0759L65.0649 17.9604L61.4999 18.8129L57.9504 17.9759L56.0129 21.0759L52.9129 22.9979ZM61.5154 32.8249C59.8711 32.8249 58.2941 32.1717 57.1314 31.009C55.9686 29.8463 55.3154 28.2693 55.3154 26.6249C55.3154 24.9806 55.9686 23.4036 57.1314 22.2409C58.2941 21.0782 59.8711 20.4249 61.5154 20.4249C64.9254 20.4249 67.6999 23.1994 67.6999 26.6094C67.6999 30.0504 64.9254 32.8249 61.5154 32.8249ZM61.4844 31.2749C58.9114 31.2749 56.8499 29.1979 56.8499 26.6249C56.8499 24.0674 58.9114 21.9749 61.4844 21.9749C64.0574 21.9749 66.1499 24.0674 66.1499 26.6249C66.1499 29.1979 64.0574 31.2749 61.4844 31.2749ZM67.4364 32.9799L65.4524 36.4519L62.2284 35.7234L66.1499 44.7599L68.3199 41.3499H72.1949L67.4364 32.9799ZM55.5014 33.0884L57.4389 36.5759L60.7404 35.7854L56.8499 44.7599L54.6799 41.3499H50.8049L55.5014 33.0884Z" fill={darkModeThem ? "#FFFFFF" : "black"} />
        </svg>
    )
}

export function LogoFigma() {
    return (
        <svg width="100%" height="alto" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="90" height="90" fill="#1E1E1E" />
            <g clip-path="url(#clip0_1_136)">
                <path d="M45 45.5C45 42.9804 46.0009 40.5641 47.7825 38.7825C49.5641 37.0009 51.9804 36 54.5 36C57.0196 36 59.4359 37.0009 61.2175 38.7825C62.9991 40.5641 64 42.9804 64 45.5C64 48.0196 62.9991 50.4359 61.2175 52.2175C59.4359 53.9991 57.0196 55 54.5 55C51.9804 55 49.5641 53.9991 47.7825 52.2175C46.0009 50.4359 45 48.0196 45 45.5Z" fill="#1ABCFE" />
                <path d="M26 64.5C26 61.9804 27.0009 59.5641 28.7825 57.7825C30.5641 56.0009 32.9804 55 35.5 55H45V64.5C45 67.0196 43.9991 69.4359 42.2175 71.2175C40.4359 72.9991 38.0196 74 35.5 74C32.9804 74 30.5641 72.9991 28.7825 71.2175C27.0009 69.4359 26 67.0196 26 64.5V64.5Z" fill="#0ACF83" />
                <path d="M45 17V36H54.5C57.0196 36 59.4359 34.9991 61.2175 33.2175C62.9991 31.4359 64 29.0196 64 26.5C64 23.9804 62.9991 21.5641 61.2175 19.7825C59.4359 18.0009 57.0196 17 54.5 17H45Z" fill="#FF7262" />
                <path d="M26 26.5C26 29.0196 27.0009 31.4359 28.7825 33.2175C30.5641 34.9991 32.9804 36 35.5 36H45V17H35.5C32.9804 17 30.5641 18.0009 28.7825 19.7825C27.0009 21.5641 26 23.9804 26 26.5V26.5Z" fill="#F24E1E" />
                <path d="M26 45.5C26 48.0196 27.0009 50.4359 28.7825 52.2175C30.5641 53.9991 32.9804 55 35.5 55H45V36H35.5C32.9804 36 30.5641 37.0009 28.7825 38.7825C27.0009 40.5641 26 42.9804 26 45.5V45.5Z" fill="#A259FF" />
            </g>
            <defs>
                <clipPath id="clip0_1_136">
                    <rect width="38" height="57" fill="white" transform="translate(26 17)" />
                </clipPath>
            </defs>
        </svg>

    )
}
export function Logonode() {
    return (
        <svg width="100%" height="alto" viewBox="0 0 256 282" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet"><g fill="#8CC84B"><path d="M116.504 3.58c6.962-3.985 16.03-4.003 22.986 0 34.995 19.774 70.001 39.517 104.99 59.303 6.581 3.707 10.983 11.031 10.916 18.614v118.968c.049 7.897-4.788 15.396-11.731 19.019-34.88 19.665-69.742 39.354-104.616 59.019-7.106 4.063-16.356 3.75-23.24-.646-10.457-6.062-20.932-12.094-31.39-18.15-2.137-1.274-4.546-2.288-6.055-4.36 1.334-1.798 3.719-2.022 5.657-2.807 4.365-1.388 8.374-3.616 12.384-5.778 1.014-.694 2.252-.428 3.224.193 8.942 5.127 17.805 10.403 26.777 15.481 1.914 1.105 3.852-.362 5.488-1.274 34.228-19.345 68.498-38.617 102.72-57.968 1.268-.61 1.969-1.956 1.866-3.345.024-39.245.006-78.497.012-117.742.145-1.576-.767-3.025-2.192-3.67-34.759-19.575-69.5-39.18-104.253-58.76a3.621 3.621 0 0 0-4.094-.006C91.2 39.257 56.465 58.88 21.712 78.454c-1.42.646-2.373 2.071-2.204 3.653.006 39.245 0 78.497 0 117.748a3.329 3.329 0 0 0 1.89 3.303c9.274 5.259 18.56 10.481 27.84 15.722 5.228 2.814 11.647 4.486 17.407 2.33 5.083-1.823 8.646-7.01 8.549-12.407.048-39.016-.024-78.038.036-117.048-.127-1.732 1.516-3.163 3.2-3 4.456-.03 8.918-.06 13.374.012 1.86-.042 3.14 1.823 2.91 3.568-.018 39.263.048 78.527-.03 117.79.012 10.464-4.287 21.85-13.966 26.97-11.924 6.177-26.662 4.867-38.442-1.056-10.198-5.09-19.93-11.097-29.947-16.55C5.368 215.886.555 208.357.604 200.466V81.497c-.073-7.74 4.504-15.197 11.29-18.85C46.768 42.966 81.636 23.27 116.504 3.58z" /><path d="M146.928 85.99c15.21-.979 31.493-.58 45.18 6.913 10.597 5.742 16.472 17.793 16.659 29.566-.296 1.588-1.956 2.464-3.472 2.355-4.413-.006-8.827.06-13.24-.03-1.872.072-2.96-1.654-3.195-3.309-1.268-5.633-4.34-11.212-9.642-13.929-8.139-4.075-17.576-3.87-26.451-3.785-6.479.344-13.446.905-18.935 4.715-4.214 2.886-5.494 8.712-3.99 13.404 1.418 3.369 5.307 4.456 8.489 5.458 18.33 4.794 37.754 4.317 55.734 10.626 7.444 2.572 14.726 7.572 17.274 15.366 3.333 10.446 1.872 22.932-5.56 31.318-6.027 6.901-14.805 10.657-23.56 12.697-11.647 2.597-23.734 2.663-35.562 1.51-11.122-1.268-22.696-4.19-31.282-11.768-7.342-6.375-10.928-16.308-10.572-25.895.085-1.619 1.697-2.748 3.248-2.615 4.444-.036 8.888-.048 13.332.006 1.775-.127 3.091 1.407 3.182 3.08.82 5.367 2.837 11 7.517 14.182 9.032 5.827 20.365 5.428 30.707 5.591 8.568-.38 18.186-.495 25.178-6.158 3.689-3.23 4.782-8.634 3.785-13.283-1.08-3.925-5.186-5.754-8.712-6.95-18.095-5.724-37.736-3.647-55.656-10.12-7.275-2.571-14.31-7.432-17.105-14.906-3.9-10.578-2.113-23.662 6.098-31.765 8.006-8.06 19.563-11.164 30.551-12.275z" /></g></svg>

    )
}
export function LogoReact() {
    return (
        <svg width="100%" height="alto" viewBox="175.7 78 490.6 436.9" xmlns="http://www.w3.org/2000/svg"><g fill="#61dafb"><path d="m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z" /><circle cx="420.9" cy="296.5" r="45.7" /></g></svg>
    )
}
export function LogoGuit() {
    return (
        <svg width="100%" height="alto"  viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet"><path d="M251.172 116.594L139.4 4.828c-6.433-6.437-16.873-6.437-23.314 0l-23.21 23.21 29.443 29.443c6.842-2.312 14.688-.761 20.142 4.693 5.48 5.489 7.02 13.402 4.652 20.266l28.375 28.376c6.865-2.365 14.786-.835 20.269 4.657 7.663 7.66 7.663 20.075 0 27.74-7.665 7.666-20.08 7.666-27.749 0-5.764-5.77-7.188-14.235-4.27-21.336l-26.462-26.462-.003 69.637a19.82 19.82 0 0 1 5.188 3.71c7.663 7.66 7.663 20.076 0 27.747-7.665 7.662-20.086 7.662-27.74 0-7.663-7.671-7.663-20.086 0-27.746a19.654 19.654 0 0 1 6.421-4.281V94.196a19.378 19.378 0 0 1-6.421-4.281c-5.806-5.798-7.202-14.317-4.227-21.446L81.47 39.442l-76.64 76.635c-6.44 6.443-6.44 16.884 0 23.322l111.774 111.768c6.435 6.438 16.873 6.438 23.316 0l111.251-111.249c6.438-6.44 6.438-16.887 0-23.324" fill="#DE4C36" /></svg>

    )
}
export function LogoSql() {
    return (
<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="alto"  viewBox="-18.458 -22.75 191.151 191.151"><path d="M-18.458 6.58h191.151v132.49H-18.458V6.58z" fill="none"/><path d="M40.054 113.583h-5.175c-.183-8.735-.687-16.947-1.511-24.642h-.046l-7.879 24.642h-3.94l-7.832-24.642h-.045c-.581 7.388-.947 15.602-1.099 24.642H7.81c.304-10.993 1.068-21.299 2.289-30.919h6.414l7.465 22.719h.046l7.511-22.719h6.137c1.344 11.268 2.138 21.575 2.382 30.919M62.497 90.771c-2.107 11.434-4.887 19.742-8.337 24.928-2.688 3.992-5.633 5.99-8.84 5.99-.855 0-1.91-.258-3.16-.77v-2.757c.611.088 1.328.138 2.152.138 1.498 0 2.702-.412 3.62-1.238 1.098-1.006 1.647-2.137 1.647-3.388 0-.858-.428-2.612-1.282-5.268L42.618 90.77h5.084l4.076 13.19c.916 2.995 1.298 5.086 1.145 6.277 2.229-5.953 3.786-12.444 4.673-19.468h4.901v.002z" fill="#5d87a1"/><path d="M131.382 113.583h-14.7V82.664h4.945v27.113h9.755v3.806zM112.834 114.33l-5.684-2.805c.504-.414.986-.862 1.42-1.381 2.416-2.838 3.621-7.035 3.621-12.594 0-10.229-4.014-15.346-12.045-15.346-3.938 0-7.01 1.298-9.207 3.895-2.414 2.84-3.619 7.022-3.619 12.551 0 5.435 1.068 9.422 3.205 11.951 1.955 2.291 4.902 3.438 8.843 3.438 1.47 0 2.819-.18 4.048-.543l7.4 4.308 2.018-3.474zm-18.413-6.934c-1.252-2.014-1.878-5.248-1.878-9.707 0-7.785 2.365-11.682 7.1-11.682 2.475 0 4.289.932 5.449 2.792 1.25 2.017 1.879 5.222 1.879 9.619 0 7.849-2.367 11.774-7.099 11.774-2.476.001-4.29-.928-5.451-2.796M85.165 105.013c0 2.622-.962 4.773-2.884 6.458-1.924 1.678-4.504 2.519-7.737 2.519-3.024 0-5.956-.966-8.794-2.888l1.329-2.655c2.442 1.223 4.653 1.831 6.638 1.831 1.863 0 3.319-.413 4.375-1.232 1.055-.822 1.684-1.975 1.684-3.433 0-1.837-1.281-3.407-3.631-4.722-2.167-1.19-6.501-3.678-6.501-3.678-2.349-1.712-3.525-3.55-3.525-6.578 0-2.506.877-4.529 2.632-6.068 1.757-1.545 4.024-2.315 6.803-2.315 2.87 0 5.479.769 7.829 2.291l-1.192 2.656c-2.01-.854-3.994-1.281-5.951-1.281-1.585 0-2.809.381-3.66 1.146-.858.762-1.387 1.737-1.387 2.933 0 1.828 1.308 3.418 3.722 4.759 2.196 1.192 6.638 3.723 6.638 3.723 2.409 1.709 3.612 3.53 3.612 6.534" fill="#f8981d"/><path d="M137.59 72.308c-2.99-.076-5.305.225-7.248 1.047-.561.224-1.453.224-1.531.933.303.3.338.784.601 1.198.448.747 1.229 1.752 1.942 2.276.783.6 1.569 1.194 2.393 1.717 1.453.899 3.1 1.422 4.516 2.318.825.521 1.645 1.195 2.471 1.756.406.299.666.784 1.193.971v-.114c-.264-.336-.339-.822-.598-1.196l-1.122-1.082c-1.084-1.456-2.431-2.727-3.884-3.771-1.196-.824-3.812-1.944-4.297-3.322l-.076-.076c.822-.077 1.797-.375 2.578-.604 1.271-.335 2.43-.259 3.734-.594.6-.15 1.195-.338 1.797-.523v-.337c-.676-.673-1.158-1.567-1.869-2.203-1.902-1.643-3.998-3.25-6.164-4.595-1.16-.749-2.652-1.231-3.887-1.868-.445-.225-1.195-.336-1.457-.71-.67-.822-1.047-1.904-1.533-2.877-1.08-2.053-2.129-4.331-3.061-6.502-.674-1.456-1.084-2.91-1.906-4.257-3.85-6.35-8.031-10.196-14.457-13.971-1.381-.786-3.024-1.121-4.779-1.533l-2.803-.148c-.598-.262-1.197-.973-1.719-1.309-2.132-1.344-7.621-4.257-9.189-.411-1.01 2.431 1.494 4.821 2.354 6.054.635.856 1.458 1.83 1.902 2.802.263.635.337 1.309.6 1.98.598 1.644 1.157 3.473 1.943 5.007.41.782.857 1.604 1.381 2.312.3.414.822.597.936 1.272-.521.744-.562 1.867-.861 2.801-1.344 4.221-.819 9.45 1.086 12.552.596.934 2.018 2.99 3.92 2.202 1.684-.672 1.311-2.801 1.795-4.668.111-.451.038-.747.262-1.043v.073c.521 1.045 1.047 2.052 1.53 3.1 1.159 1.829 3.177 3.735 4.858 5.002.895.676 1.604 1.832 2.725 2.245V74.1h-.074c-.227-.335-.559-.485-.857-.745-.674-.673-1.42-1.495-1.943-2.241-1.566-2.093-2.952-4.41-4.182-6.801-.602-1.16-1.121-2.428-1.606-3.586-.226-.447-.226-1.121-.601-1.346-.562.821-1.381 1.532-1.791 2.538-.711 1.609-.785 3.588-1.049 5.646l-.147.072c-1.19-.299-1.604-1.53-2.056-2.575-1.119-2.654-1.307-6.914-.336-9.976.26-.783 1.385-3.249.936-3.995-.225-.715-.973-1.122-1.383-1.685-.482-.708-1.01-1.604-1.346-2.39-.896-2.091-1.347-4.408-2.312-6.498-.451-.974-1.234-1.982-1.868-2.879-.712-1.008-1.495-1.718-2.058-2.913-.186-.411-.447-1.083-.148-1.53.073-.3.225-.412.523-.487.484-.409 1.867.111 2.352.336 1.385.56 2.543 1.083 3.699 1.867.523.375 1.084 1.085 1.755 1.272h.786c1.193.26 2.538.072 3.661.41 1.979.636 3.772 1.569 5.38 2.576 4.893 3.103 8.928 7.512 11.652 12.778.447.858.637 1.644 1.045 2.539.787 1.832 1.76 3.7 2.541 5.493.785 1.755 1.533 3.547 2.654 5.005.559.784 2.805 1.195 3.812 1.606.745.335 1.905.633 2.577 1.044 1.271.783 2.537 1.682 3.732 2.543.595.448 2.465 1.382 2.576 2.13M99.484 39.844a5.82 5.82 0 0 0-1.529.188v.075h.072c.301.597.824 1.011 1.197 1.532.301.599.562 1.193.857 1.791l.072-.074c.527-.373.789-.971.789-1.868-.227-.264-.262-.522-.451-.784-.22-.374-.705-.56-1.007-.86" fill="#5d87a1"/><path d="M141.148 113.578h.774v-3.788h-1.161l-.947 2.585-1.029-2.585h-1.118v3.788h.731v-2.882h.041l1.078 2.882h.557l1.074-2.882v2.882zm-6.235 0h.819v-3.146h1.072v-.643h-3.008v.643h1.115l.002 3.146z" fill="#f8981d"/></svg>
    )
}
export function LogoHtmlAndCss() {
    return <img width="100%" alt="html e css" height="alto" src={HtmlAndCss}  />
}
