import React from 'react'

function Grid() {
    return (
        <div>
            {/* <div className="grid grid-cols-3 gap-2 grid-rows-4">
        <div className='border-2 row-span-3'>1</div>
        <div className='border-2'>2</div>
        <div className='border-2'>3</div>
        <div className='border-2'>4</div>
        <div className='border-2 col-span-2'>5</div>
        <div className='border-2'>6</div>
        <div className='border-2'>7</div>
        <div className='border-2'>8</div>
        <div className='border-2'>9</div>
        <div className='border-2'>10</div>
      </div> */}
            <table class="border-separate border-spacing-2 border border-gray-400 dark:border-gray-500">
                <thead>
                    <tr>
                        <th class="border border-gray-300 dark:border-gray-600">State</th>
                        <th class="border border-gray-300 dark:border-gray-600">City</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-gray-300 dark:border-gray-700">Indiana</td>
                        <td class="border border-gray-300 dark:border-gray-700">Indianapolis</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 dark:border-gray-700">Ohio</td>
                        <td class="border border-gray-300 dark:border-gray-700">Columbus</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 dark:border-gray-700">Michigan</td>
                        <td class="border border-gray-300 dark:border-gray-700">Detroit</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Grid
