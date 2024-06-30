import { useState, useEffect } from 'react';
import TextInput from '../components/reusables/Textinput';
import Radio from '../components/reusables/Radio';
import Checkbox from '../components/reusables/Checkbox';
import Select from '../components/reusables/Select';

const steps = ['Step 1', 'Step 2'];

const DataInput = () => {
  const [age, setAge] = useState<string | number>('');
  const [sex, setSex] = useState<string | number>('');
  const [onThyroxine, setOnThyroxine] = useState<boolean>(false);
  const [queryOnThyroxine, setQueryOnThyroxine] = useState<boolean>(false);
  const [onAntithyroidMedication, setOnAntithyroidMedication] =
    useState<boolean>(false);
  const [sick, setSick] = useState<boolean>(false);
  const [pregnant, setPregnant] = useState<boolean>(false);

  const [thyroidSurgery, setThyroidSurgery] = useState<boolean>(false);
  const [I131Treatment, setI131Treatment] = useState<boolean>(false);
  const [queryHypothyroid, setQueryHypothyroid] = useState<boolean>(false);
  const [queryHyperthyroid, setQueryHyperthyroid] = useState<boolean>(false);
  const [lithium, setLithium] = useState<boolean>(false);
  const [goitre, setGoitre] = useState<boolean>(false);
  const [tumor, setTumor] = useState<boolean>(false);
  const [hypopituitary, setHypopituitary] = useState<boolean>(false);
  const [psych, setPsych] = useState<boolean>(false);

  const [TshMeasured, setTshMeasured] = useState<boolean>(false);
  const [Tsh, setTsh] = useState('');
  const [T3Measured, setT3Measured] = useState<boolean>(false);
  const [T3, setT3] = useState('');
  const [TT4Measured, setTT4Measured] = useState<boolean>(false);
  const [TT4, setTT4] = useState('');
  const [T4UMeasured, setT4UMeasured] = useState<boolean>(false);
  const [T4U, setT4U] = useState('');
  const [FTIMeasured, setFTIMeasured] = useState<boolean>(false);
  const [FTI, setFTI] = useState('');
  const [referralSource, setReferralSource] = useState<string | number>('');

  // Form steps
  const [step, setStep] = useState(0);

  async function handleSubmit(e: any) {
    e.preventDefault();

    if (step <= steps.length - 1) {
      setStep(step + 1);
      return;
    }

    try {
    } catch (err) {
      console.log(err);
    }
  }

  const goBack = (): void => {
    setStep(step - 1);
  };

  return (
    <div className='flex w-full justify-center'>
      <div className='w-8/12'>
        <h1 className='px-4 text-3xl py-2'>Input Form</h1>

        <form className='' onSubmit={handleSubmit}>
          {step === 0 ? (
            <div className='grid grid-cols-3 p-4 gap-4'>
              <TextInput value={age} label='Age' onChange={setAge} />
              <TextInput value={Tsh} label='TSH' onChange={setTsh} />
              <TextInput value={T3} label='T3' onChange={setT3} />
              <TextInput value={TT4} label='TT4' onChange={setTT4} />
              <TextInput value={T4U} label='T4U' onChange={setT4U} />
              <TextInput value={FTI} label='FTI' onChange={setFTI} />

              <Select
                options={[
                  { name: 'Other', value: '0' },
                  { name: 'SVI', value: '1' },
                  { name: 'SVHC', value: '2' },
                  { name: 'STMW', value: '3' },
                  { name: 'SVHD', value: '4' }
                ]}
                value={referralSource}
                label='Referral Source'
                onChange={setReferralSource}
              />
              <Radio
                label='Sex'
                options={[
                  { name: 'Male', value: 'male' },
                  { name: 'Female', value: 'female' }
                ]}
                onChange={setSex}
                value={sex}
              />
            </div>
          ) : null}

          {step === 1 ? (
            <div className='grid grid-cols-3 p-4 gap-4'>
              <Checkbox
                checked={onThyroxine}
                onChange={setOnThyroxine}
                label='On Thyroxine'
              />
              <Checkbox
                checked={queryOnThyroxine}
                label='Query On Thyroxine'
                onChange={setQueryOnThyroxine}
              />
              <Checkbox
                checked={onAntithyroidMedication}
                onChange={setOnAntithyroidMedication}
                label='On Anti-Thyroid Medication'
              />
              <Checkbox checked={sick} onChange={setSick} label='Sick' />
              <Checkbox
                checked={pregnant}
                onChange={setPregnant}
                label='Pregnant'
              />

              <Checkbox
                checked={thyroidSurgery}
                onChange={setThyroidSurgery}
                label='Thyroid Surgery'
              />

              <Checkbox
                checked={I131Treatment}
                onChange={setI131Treatment}
                label='I131 Treatment'
              />

              <Checkbox
                checked={queryHypothyroid}
                onChange={setQueryHypothyroid}
                label='Query Hypothyroid'
              />

              <Checkbox
                checked={queryHyperthyroid}
                onChange={setQueryHyperthyroid}
                label='Query Hyperthyroid'
              />

              <Checkbox
                checked={lithium}
                onChange={setLithium}
                label='Lithium'
              />

              <Checkbox checked={goitre} onChange={setGoitre} label='Goitre' />
              <Checkbox checked={tumor} onChange={setTumor} label='Tumor' />
              <Checkbox
                checked={hypopituitary}
                onChange={setHypopituitary}
                label='Hypo Pituitary'
              />
              <Checkbox checked={psych} onChange={setPsych} label='Psych' />
              <Checkbox
                checked={TshMeasured}
                onChange={setTshMeasured}
                label='TSH Measured'
              />

              <Checkbox
                checked={T3Measured}
                onChange={setT3Measured}
                label='T3 Measured'
              />

              <Checkbox
                checked={TT4Measured}
                onChange={setTT4Measured}
                label='TT4 Measured'
              />

              <Checkbox
                checked={T4UMeasured}
                onChange={setT4UMeasured}
                label='T4U Measured'
              />
              <Checkbox
                checked={FTIMeasured}
                onChange={setFTIMeasured}
                label='FTI Measured'
              />
            </div>
          ) : null}

          <div className='flex gap-4 justify-center'>
            <button
              disabled={step === 0}
              type='button'
              onClick={goBack}
              className='px-4 py-2 bg-blue-500 text-white'
            >
              Back
            </button>

            <button className='px-4 py-2 bg-green-500 text-white'>
              {step === steps.length - 1 ? 'Submit' : 'Next'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DataInput;
