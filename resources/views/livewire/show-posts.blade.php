<div>
@include('livewire.includes.nav')
<section class="bg-secondary-100">
      <div class="bg-secondary-100 flex maxlg:flex-col container gap-[30px] pt-16">
        <!--main-->
        <main class="main flex flex-col justify-between bg-secondary-100 py-[20px] px-[4.5%] w-[70%] maxlg:w-full border border-[#D5D5D5] rounded-[10px]">
          <p>
            سنتر ناين هو مشروع متعدد الاستخدامات من قبل نماء الخليج ، ويقدم
            مزيجًا فريدًا من المساحات التجارية والتجزئة في موقع متميز. توفر
            المساحات التجارية والتجزئة مجموعة من الخدمات والمرافق ، بما في ذلك
            خيارات تناول الطعام والتسوق والترفيه. يتضح التزام نماء الخليج
            بالاستدامة في كفاءة الطاقة العالية والمعايير البيئية في التطوير ،
            بما في ذلك ميزات مثل الألواح الشمسية والإضاءة الموفرة للطاقة وأنظمة
            الحفاظ على المياه. يتميز Center Nine أيضًا بمساحات خارجية مشذبة
            جيدًا ، مما يجعله وجهة هادئة ومريحة للزوار.
          </p>

		  <div class="maxlg:mt-5 w-full">
            <h2 class="text-[27px] font-bold mb-5 text-secondary-1000">
              قدم طلبك لهذا المشروع
            </h2>
            <form action="" class="grid grid-cols-2 gap-[18px]">
              <div class="lg:col-span-1 col-span-2 rounded-[10px]" style="box-shadow: 0px 3px 10px #1e294d26">
                <input id="username" name="username" type="text" class="w-full px-6 maxlg:px-8 py-3 maxlg:py-1.5 text-[17px] maxlg:text-[14px] placeholder:text-secondary-2100 bg-white rounded-[10px] focus:border-gray-500 focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-40" placeholder="الاسم" required="">
              </div>
              <div class="lg:col-span-1 col-span-2 rounded-[10px]" style="box-shadow: 0px 3px 10px #1e294d26">
                <input id="userEmail" name="userEmail" type="email" class="w-full px-6 maxlg:px-8 py-3 maxlg:py-1.5 text-[17px] maxlg:text-[14px] placeholder:text-secondary-2100 bg-white rounded-[10px] focus:border-gray-500 focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-40" placeholder="البريد الإلكتروني" required="">
                <span class="text-red-500 text-sm"></span>
              </div>

       
              <div class="lg:col-span-1 col-span-2 rounded-[10px]" style="box-shadow: 0px 3px 10px #1e294d26">
              <label for="country">Country:</label>
       
        <select wire:model="selectedCountry" id="country">
            <option value="">Select Country</option>
            @foreach ($countries as $country)
                <option value="{{ $country->id }}">{{ $country->name_en }}</option>
            @endforeach
        </select>
              </div>


              <div class="lg:col-span-1 col-span-2 rounded-[10px]" style="box-shadow: 0px 3px 10px #1e294d26">
              <label for="city">City:</label>
			  <select id="city" wire:loading.attr="disabled">
    <option value="">Select City</option>
    @if ($selectedCountry)
        @foreach ($cities as $city)
            <option value="{{ $city->id }}" wire:key="{{$city->id }}">{{ $city->name_en }}</option>
        @endforeach
    @endif
</select>
              </div>

              <div class="col-span-1 maxlg:col-span-2 rounded-[10px]" style="box-shadow: 0px 3px 10px #1e294d26">
                <input id="message_address" name="message_address" type="text" class="block w-full px-6 maxlg:px-8 py-3 maxlg:py-1.5 text-[17px] maxlg:text-[14px] placeholder:text-secondary-2100 bg-white rounded-[10px] focus:border-gray-500 focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-40" placeholder="عنوان الطلب" required="">
              </div>

              <div class="col-span-2 rounded-lg" style="box-shadow: 0px 3px 10px #1e294d26">
                <textarea id="message" rows="7" name="message" class="block p-2.5 w-full text-sm placeholder:text-secondary-2100 bg-secondary-100 rounded-lg focus:border-gray-500 focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-40" placeholder="نص الطلب" required=""></textarea>
              </div>

              <div class="col-span-2 w-full">
                <button type="submit" class="text-white flex justify-center gap-1 items-center bg-primary w-full font-normal rounded-lg text-base py-2.5 hover:scale-105">
                  إرسال
                </button>
              </div>
            </form>
          </div>
            
       
    
        </main>
        <!--aside-->
        <aside class="h-screen maxlg:h-full aside bg-secondary-100 grid grid-cols-1 gap-8 py-[20px] maxlg:w-full w-[25%] sticky maxlg:block top-32">
          <div class="col-span-1 relative w-full aspect-[1/1] maxlg:aspect-video">
          <iframe src="https://maps.google.com/maps?q=30.007582601917807,30.975914863051777&amp;z=15&amp;output=embed" width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen="" loading="lazy" onerror="this.onerror=null;this.src='../img/Group 40870.webp';"></iframe>


          

          </div>

         @include('livewire.includes.latest-projects')
        </aside>
      </div>
    </section>

</div>

