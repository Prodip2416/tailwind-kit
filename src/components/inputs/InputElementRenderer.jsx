import { useState } from 'react';
import CustomDatePicker from './date/CustomDatePicker';
import DateRangePicker from './date/DateRangePicker';
import RateInput from './rate/RateInput';
import SwitchInput from './switch/SwitchInput';
import TreeSelect from './tree-select/TreeSelect';
import { RadioButton, RadioGroup } from './radio/RadioButton';
import { Checkbox, CheckboxGroup } from './checkbox/Checkbox';

const InputElementRenderer = ({ componentId, formData, handleInputChange }) => {
  const [filePreview, setFilePreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFilePreview(URL.createObjectURL(file));
      handleInputChange(e);
    }
  };

  const treeSelectOptions = [
    {
      id: 'tech',
      value: 'technology',
      label: 'Technology',
      children: [
        { id: 'web', value: 'web-dev', label: 'Web Development' },
        { id: 'mobile', value: 'mobile-dev', label: 'Mobile Development' },
        { id: 'ai', value: 'ai-ml', label: 'AI & Machine Learning' },
      ],
    },
    {
      id: 'design',
      value: 'design',
      label: 'Design',
      children: [
        { id: 'ui', value: 'ui-design', label: 'UI Design' },
        { id: 'ux', value: 'ux-design', label: 'UX Design' },
        { id: 'graphic', value: 'graphic-design', label: 'Graphic Design' },
      ],
    },
  ];

  switch (componentId) {
    case 'text':
      return (
        <input
          type="text"
          name="text"
          value={formData.text}
          onChange={handleInputChange}
          placeholder="Enter text here..."
          className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 dark:placeholder-slate-400 transition-colors text-sm min-w-0"
        />
      );

    case 'email':
      return (
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter email address..."
          className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 dark:placeholder-slate-400 transition-colors text-sm min-w-0"
        />
      );

    case 'password':
      return (
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Enter password..."
          className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 dark:placeholder-slate-400 transition-colors text-sm min-w-0"
        />
      );

    case 'number':
      return (
        <input
          type="number"
          name="number"
          value={formData.number}
          onChange={handleInputChange}
          placeholder="Enter number..."
          className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 dark:placeholder-slate-400 transition-colors text-sm min-w-0"
        />
      );

    case 'textarea':
      return (
        <textarea
          name="textarea"
          value={formData.textarea}
          onChange={handleInputChange}
          placeholder="Enter your message..."
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 dark:placeholder-slate-400 transition-colors text-sm min-w-0 resize-none"
        />
      );

    case 'select':
      return (
        <select
          name="select"
          value={formData.select}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm min-w-0 appearance-none cursor-pointer"
        >
          <option value="">Select an option...</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      );

    case 'checkbox':
      return (
        <div className="space-y-3">
          <Checkbox
            id="checkbox-demo"
            name="checkbox"
            label="Accept terms and conditions"
            checked={formData.checkbox}
            onChange={handleInputChange}
          />
          <Checkbox
            id="checkbox-newsletter"
            name="newsletter"
            label="Subscribe to newsletter"
            checked={formData.newsletter || false}
            onChange={handleInputChange}
          />
          <Checkbox
            id="checkbox-marketing"
            name="marketing"
            label="Receive marketing emails"
            checked={formData.marketing || false}
            onChange={handleInputChange}
          />
        </div>
      );

    case 'radio':
      return (
        <div className="space-y-3">
          <RadioButton
            id="radio-option1"
            name="radio"
            value="option1"
            label="Option 1"
            checked={formData.radio === 'option1'}
            onChange={handleInputChange}
          />
          <RadioButton
            id="radio-option2"
            name="radio"
            value="option2"
            label="Option 2"
            checked={formData.radio === 'option2'}
            onChange={handleInputChange}
          />
          <RadioButton
            id="radio-option3"
            name="radio"
            value="option3"
            label="Option 3"
            checked={formData.radio === 'option3'}
            onChange={handleInputChange}
          />
        </div>
      );

    case 'range':
      return (
        <div className="space-y-2">
          <input
            type="range"
            name="range"
            min="0"
            max="100"
            value={formData.range}
            onChange={handleInputChange}
            className="w-full h-2 bg-gray-200 dark:bg-slate-600 rounded-lg appearance-none cursor-pointer slider"
            style={{
              background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${formData.range}%, #e5e7eb ${formData.range}%, #e5e7eb 100%)`,
            }}
          />
          <div className="text-sm text-gray-600 dark:text-blue-300 text-center">
            Value: {formData.range}
          </div>
        </div>
      );

    case 'date':
      return (
        <CustomDatePicker
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          placeholder="Select a date..."
        />
      );

    case 'time':
      return (
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm min-w-0"
        />
      );

    case 'file':
      return (
        <div className="space-y-2">
          <input
            type="file"
            name="file"
            onChange={handleFileChange}
            className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm min-w-0 file:mr-4 file:py-1 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 dark:file:bg-blue-900 dark:file:text-blue-300 dark:hover:file:bg-blue-800"
          />
          {filePreview && (
            <div className="mt-2">
              <img
                src={filePreview}
                alt="Preview"
                className="w-20 h-20 object-cover rounded-md border border-gray-200 dark:border-slate-600"
              />
            </div>
          )}
        </div>
      );

    case 'dateRange':
      return (
        <DateRangePicker
          name="dateRange"
          value={formData.dateRange}
          onChange={handleInputChange}
          placeholder="Select date range..."
        />
      );

    case 'rate':
      return (
        <div className="space-y-6">
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-700 dark:text-blue-200">
              Star Rating - Large Size
            </h4>
            <RateInput
              name="rate"
              value={formData.rate}
              onChange={handleInputChange}
              max={5}
              size="xl"
              allowHalf={false}
              showText={true}
              text={['Terrible', 'Bad', 'OK', 'Good', 'Excellent']}
            />
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-700 dark:text-blue-200">
              Star Rating - Extra Large Size
            </h4>
            <RateInput
              name="rate2"
              value={formData.rate2 || 0}
              onChange={handleInputChange}
              max={5}
              size="xl"
              allowHalf={true}
              showText={true}
              text={['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']}
            />
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-700 dark:text-blue-200">
              Star Rating - Different Sizes
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600 dark:text-blue-300 w-16">Small:</span>
                <RateInput
                  name="rate3"
                  value={formData.rate3 || 0}
                  onChange={handleInputChange}
                  max={5}
                  size="sm"
                  allowHalf={false}
                />
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600 dark:text-blue-300 w-16">Medium:</span>
                <RateInput
                  name="rate4"
                  value={formData.rate4 || 0}
                  onChange={handleInputChange}
                  max={5}
                  size="md"
                  allowHalf={false}
                />
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600 dark:text-blue-300 w-16">Large:</span>
                <RateInput
                  name="rate5"
                  value={formData.rate5 || 0}
                  onChange={handleInputChange}
                  max={5}
                  size="lg"
                  allowHalf={false}
                />
              </div>
            </div>
          </div>
        </div>
      );

    case 'switch':
      return (
        <SwitchInput
          name="switch"
          value={formData.switch}
          onChange={handleInputChange}
          size="md"
          color="blue"
          label="Enable notifications"
          description="Receive updates about your account"
        />
      );

    case 'treeSelect':
      return (
        <TreeSelect
          name="treeSelect"
          value={formData.treeSelect}
          onChange={handleInputChange}
          placeholder="Select categories..."
          multiple={true}
          searchable={true}
          options={treeSelectOptions}
        />
      );

    default:
      return <div>Component not found</div>;
  }
};

export default InputElementRenderer;
