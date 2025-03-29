
const SignUp = () => {

  return (

    <>
        {/* 성 */}
        <label className="block text-sm font-medium mb-1">
          성(Last name) <span className="text-blue-500">※</span>
        </label>
        <input type="text" placeholder="성을 입력해 주세요." className="w-full border px-3 py-2 mb-4" />

        {/* 이름 */}
        <label className="block text-sm font-medium mb-1">
          이름(First name) <span className="text-blue-500">※</span>
        </label>
        <input type="text" placeholder="이름을 입력해 주세요." className="w-full border px-3 py-2 mb-4" />

        {/* 이메일 */}
        <label className="block text-sm font-medium mb-1">
          이메일 주소(아이디) <span className="text-blue-500">※</span>
        </label>
        <input type="email" placeholder="이메일(example@uniqlo.com)" className="w-full border px-3 py-2 mb-4" />

        {/* 비밀번호 */}
        <label className="block text-sm font-medium mb-1">
          비밀번호 <span className="text-blue-500">※</span>
        </label>
        <div className="relative mb-2">
          <input type="password" placeholder="비밀번호를 입력해 주세요." className="w-full border px-3 py-2 pr-10" />
          <span className="absolute right-3 top-2.5 text-gray-500 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </span>
        </div>

        {/* 비밀번호 조건 */}
        <div className="text-sm text-gray-700 space-y-1 mb-6">
          <div className="flex items-center gap-2">
            <input type="radio" disabled className="w-4 h-4" />
            <span>8~20자</span>
          </div>
          <div className="flex items-center gap-2">
            <input type="radio" disabled className="w-4 h-4" />
            <span>영문+숫자</span>
          </div>
        </div>

        {/* 전화번호 */}
        <label className="block text-sm font-medium mb-1">
          전화번호 <span className="text-blue-500">※</span>
        </label>
        <input type="text" placeholder="전화번호를 입력해 주세요." className="w-full border px-3 py-2 mb-6" />

        {/*  마케팅 수신 동의  */}
        <label className="block text-sm font-medium mb-2">마케팅 수신 동의 (선택)</label>
        <div className="flex items-center gap-2 mb-2">
          <input type="checkbox" className="w-5 h-5" />
          <span className="text-sm">동의합니다.</span>
        </div>
        <p className="text-xs text-gray-500 leading-relaxed mb-8">
         
        </p>

        {/* <!-- 미리 보기 버튼 --> */}
        <button className="w-full bg-black text-white text-lg py-3 rounded-full">
          
        </button>
      

    </>
  );
};