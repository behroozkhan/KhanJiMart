

const LanguageChanger = () => {
    return (
      <div>
           <select name="languages" id="lang" 
           className=" border-none bg-transparent text-[var(--mainTextWhiteColor)] focus:outline-none"
           style={{
              color: 'var(--mainTextWhiteColor)',
              backgroundColor: 'var(--mainTextBlack)',
            }}
           >
          <option value="javascript">English</option>
          <option value="php">Spanish</option>
          <option value="java">Urdu</option>
          <option value="golang">Hindhi</option>
          <option value="python">Arabic</option>
          <option value="c#">Turkish</option>
          <option value="C++">Persion</option>
          <option value="erlang">Bangali</option>
        </select>
      </div>
    )
  }
  
  export default LanguageChanger;