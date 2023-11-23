interface Props {
  label?: string;
  name?: string;
  [key:string]: any;
}

const Textarea = ({label, name, ...rest}: Props) => {
  
  return (
    <div className='mt-2'>
      {label && <label
        className="text-sm mb-1 block font-medium text-gray-900"
        htmlFor={name}
      >
        {label}
      </label>}
      
      <div>
        <textarea
          className="mt-1 shadow-sm w-full focus:outline-none  focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-500"
          id={name}
          rows={4}
          {...rest}  // 여기서 ...rest 는 textarea 속성들을 넣어준다. 예) placeholder, required, ...etc.}
        />
      </div>
    </div>
  );
};

export default Textarea;
