<div class="maxlg:mt-5 w-full">
            <h2 class="text-[27px] font-bold mb-5 text-secondary-1000">
              قدم طلبك لهذا المشروع
            </h2>

            @if(session('success'))
            <span>{{session('success')}}</span>
            @endif
            <form wire:submit="submit" class="grid grid-cols-2 gap-[18px]">

      
              <div class="lg:col-span-1 col-span-2 rounded-[10px]" style="box-shadow: 0px 3px 10px #1e294d26">
                <input id="username" wire:model="username" type="text" class="w-full px-6 maxlg:px-8 py-3 maxlg:py-1.5 text-[17px] maxlg:text-[14px] placeholder:text-secondary-2100 bg-white rounded-[10px] focus:border-gray-500 focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-40" placeholder="الاسم" required="">
              </div>
              <div class="lg:col-span-1 col-span-2 rounded-[10px]" style="box-shadow: 0px 3px 10px #1e294d26">
                <input id="userEmail" wire:model="useremail" type="email" class="w-full px-6 maxlg:px-8 py-3 maxlg:py-1.5 text-[17px] maxlg:text-[14px] placeholder:text-secondary-2100 bg-white rounded-[10px] focus:border-gray-500 focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-40" placeholder="البريد الإلكتروني" required="">
                <span class="text-red-500 text-sm"></span>
              </div>

       
              <div class="lg:col-span-1 col-span-2 rounded-[10px]" style="box-shadow: 0px 3px 10px #1e294d26">
              <label for="country">Country:</label>
       
               <select wire:model.live.debounce.250m="selectedcountry" wire:model="country" id="country">
                  <option value="">Select Country</option>
                 @foreach ($countries as $country)
                <option  value="{{ $country->id }}">{{ $country->name_en }}</option>
               @endforeach
               </select>
              </div>


              <div class="lg:col-span-1 col-span-2 rounded-[10px]" style="box-shadow: 0px 3px 10px #1e294d26">
              <label for="city">City:</label>
			             <select id="city" wire:model="city" wire:loading.attr="disabled">
                   <option value="">Select City</option>
                     @if ($selectedcountry)
                                @foreach ($cities as $city)
              <option  value="{{ $city->id }}" wire:key="{{$city->id }}">{{ $city->name_en }}</option>
                          @endforeach
                         @endif
                 </select>
              </div>

              <div class="col-span-1 maxlg:col-span-2 rounded-[10px]" style="box-shadow: 0px 3px 10px #1e294d26">
                <input id="message_address" wire:model="message_address" type="text" class="block w-full px-6 maxlg:px-8 py-3 maxlg:py-1.5 text-[17px] maxlg:text-[14px] placeholder:text-secondary-2100 bg-white rounded-[10px] focus:border-gray-500 focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-40" placeholder="عنوان الطلب" required="">
              </div>


              <div class="col-span-2 rounded-lg" style="box-shadow: 0px 3px 10px #1e294d26">
                <textarea id="message" rows="7" wire:model="message" class="block p-2.5 w-full text-sm placeholder:text-secondary-2100 bg-secondary-100 rounded-lg focus:border-gray-500 focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-40" placeholder="نص الطلب" required=""></textarea>
              </div>

              <div class="col-span-1 maxlg:col-span-2 rounded-[10px]" style="box-shadow: 0px 3px 10px #1e294d26">
              
              <input id="conditions" wire:model="conditions" type="checkbox" class="inline-block w-full px-6 maxlg:px-8 py-3 maxlg:py-1.5 text-[17px] maxlg:text-[14px] placeholder:text-secondary-2100 bg-white rounded-[10px] focus:border-gray-500 focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-40" placeholder="\الموافه علي الشروط" required="">
              <span>الموافقه علي الشروط</span>
              </div>

              <div class="col-span-2 w-full">
              <button type="submit" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                  submit
                </button>
              </div>
            </form>
          </div>