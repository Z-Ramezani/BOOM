import {Component} from 'react';
import Button from './components/button';
class App extends Component {
  state = {  } 
  render() { 
    return (
      <div className='container'>
      <div className="row d-flex justify-content-center">
          <div className="col-md-6">  
                <form >
                <div class="row mb-3 ">
                       <label for="inputEmail3" class="col-sm-3 col-form-label">نام و نام‌خانوادگی</label>
                        <div class="col-sm-8">
                            <input type="text" class="form-control" id="inputEmail3" required/>
                        </div>
                    </div>
                   <div class="row mb-3">
                       <label for="inputEmail3" class="col-sm-2 col-form-label">ایمیل</label>
                        <div class="col-sm-10">
                            <input type="email" class="form-control" id="inputEmail3"/>
                        </div>
                    </div>
                  <div class="row mb-3">
                  <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                  <div class="col-sm-10">
                  <input type="password" class="form-control" id="inputPassword3"/>
                 </div>
                </div>
                <fieldset class="row mb-3">
                <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
                <div class="col-sm-10">
                 <div class="form-check">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
                <label class="form-check-label" for="gridRadios1">
                  First radio
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                <label class="form-check-label" for="gridRadios2">
                  Second radio
                </label>
              </div>

            </div>
          </fieldset>
          <div class="row mb-3">
            <div class="col-sm-10 offset-sm-2">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck1"/>
                <label class="form-check-label" for="gridCheck1">
                  Example checkbox
                </label>
              </div>
            </div>
          </div>
          <div className='row g-3'>
            <div className='col-md-1'>
                    <Button width= '200px' height= '49px' text= 'بازنشانی' /*reference=''*//*sholde use axios library for connect backend in next edit*//>
                    </div>
                    <div className='col-md-6'>
                   <Button width= '250px' height= '49px' text= 'ثبت‌نام به عنوان هنرمند' /*reference=''*//*sholde use axios library for connect backend in next edit*//>
                   </div> 
                   <div className='col-md-7'>
                    <Button width= '260px' height= '49px' text= 'ثبت‌نام به عنوان کارشناس' /*reference=''*//*sholde use axios library for connect backend in next edit*//>
                    </div>
          </div>

          
        </form>
        </div>
      </div>
      </div>
    );
  }
}
 
export default App;
