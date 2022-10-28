import React from "react";
import Store_context from './UseContext'
const Raido = ({ value_std }) => {
  const [vlau, setval] = React.useState();
  const [error, seterror] = React.useState('');
  const { counts ,setcounts } = React.useContext(Store_context);

const  onChange=(e) => {
    setval(e.target.value)
    var value = e.target.value
    if ( value == value_std.pos ) {
      setcounts(counts + 10);
        seterror('True')
  }else {
    seterror('false')
  }
    console.log('vlaue en '  ,e.target.value , value_std.pos )

}



  return (
    <>
      <div class="flex justify-center">
       
          <div class="form-check">

<ul class="w-48 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <li class="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input onChange={onChange}  id="list-radio-license" type="radio" value="verb" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="list-radio-license"  class="cursor-pointer  py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">verb </label>
        </div>
    </li>
    <li class="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input  onChange={onChange}   id="list-radio-id" type="radio" value="adjective" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label  for="list-radio-id" class="cursor-pointer  py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">adjective</label>
        </div>
    </li>
    <li class="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input onChange={onChange}  id="list-radio-millitary" type="radio" value="noun" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="list-radio-millitary" class="cursor-pointer  py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">noun</label>
        </div>
    </li>
    <li class="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input onChange={onChange}  id="list-radio-passport" type="radio" value="adverb" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="list-radio-passport" class="cursor-pointer  py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">adverb</label>
        </div>
    </li>
  
    
</ul>
          
        </div>
        <br />
      </div>
    </>
  );
};

export default Raido;
