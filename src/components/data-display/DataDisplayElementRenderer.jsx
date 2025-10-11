import React from 'react';
import Table from './table/Table';
import Card, { CardGroup, CardGrid } from './card/Card';
import List, { ListItem, ListGroup, ListSection } from './list/List';
import Grid, {
  GridItem,
  MasonryGrid,
  MasonryItem,
  FlexGrid,
  FlexItem,
} from './grid/Grid';
import Chart from './chart/Chart';
import Stat, { StatGrid, StatCard, StatList } from './stat/Stat';
import Timeline, {
  TimelineItem,
  TimelineHeader,
  TimelineGroup,
  TimelineStep,
} from './timeline/Timeline';
import Avatar, { AvatarGroup, AvatarStack, AvatarList } from './avatar/Avatar';
import RateInput from '../inputs/rate/RateInput';

const DataDisplayElementRenderer = ({
  componentId,
  formData,
  handleInputChange,
}) => {
  switch (componentId) {
    case 'table':
      return (
        <div className="space-y-6">
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-700 dark:text-blue-200">
              Basic Table
            </h4>
            <Table
              data={[
                {
                  id: 1,
                  name: 'John Doe',
                  email: 'john@example.com',
                  role: 'Admin',
                  status: 'Active',
                },
                {
                  id: 2,
                  name: 'Jane Smith',
                  email: 'jane@example.com',
                  role: 'User',
                  status: 'Inactive',
                },
                {
                  id: 3,
                  name: 'Bob Johnson',
                  email: 'bob@example.com',
                  role: 'Moderator',
                  status: 'Active',
                },
                {
                  id: 4,
                  name: 'Alice Brown',
                  email: 'alice@example.com',
                  role: 'User',
                  status: 'Active',
                },
                {
                  id: 5,
                  name: 'Charlie Wilson',
                  email: 'charlie@example.com',
                  role: 'Admin',
                  status: 'Inactive',
                },
              ]}
              columns={[
                { key: 'name', label: 'Name', sortable: true },
                { key: 'email', label: 'Email', sortable: true },
                { key: 'role', label: 'Role', sortable: true },
                { key: 'status', label: 'Status', sortable: true },
              ]}
              sortable={true}
              filterable={true}
              pagination={true}
              striped={true}
              hoverable={true}
            />
          </div>
        </div>
      );

    case 'card':
      return (
        <div className="space-y-6">
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-700 dark:text-blue-200">
              Basic Cards
            </h4>
            <CardGroup>
              <Card
                title="Card Title"
                subtitle="Card subtitle"
                image="https://picsum.photos/300/200?random=1"
                imageAlt="Card image"
                actions={
                  <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700">
                    Action
                  </button>
                }
              >
                <p className="text-gray-600 dark:text-blue-300">
                  This is a basic card with title, subtitle, image, and content.
                </p>
              </Card>
              <Card
                title="Another Card"
                subtitle="With different content"
                variant="outlined"
                image="https://picsum.photos/300/200?random=2"
                imageAlt="Another card image"
              >
                <p className="text-gray-600 dark:text-blue-300">
                  This card has an outlined variant with an image.
                </p>
              </Card>
            </CardGroup>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-700 dark:text-blue-200">
              Card Grid
            </h4>
            <CardGrid columns={3}>
              <Card
                title="Grid Card 1"
                size="sm"
                image="https://picsum.photos/200/150?random=3"
                imageAlt="Grid card 1"
              >
                <p className="text-gray-600 dark:text-blue-300">Content 1</p>
              </Card>
              <Card
                title="Grid Card 2"
                size="sm"
                image="https://picsum.photos/200/150?random=4"
                imageAlt="Grid card 2"
              >
                <p className="text-gray-600 dark:text-blue-300">Content 2</p>
              </Card>
              <Card
                title="Grid Card 3"
                size="sm"
                image="https://picsum.photos/200/150?random=5"
                imageAlt="Grid card 3"
              >
                <p className="text-gray-600 dark:text-blue-300">Content 3</p>
              </Card>
            </CardGrid>
          </div>
        </div>
      );

    case 'list':
      return (
        <div className="space-y-6">
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-700 dark:text-blue-200">
              Basic List
            </h4>
            <List
              items={[
                { id: 1, content: 'List item 1' },
                { id: 2, content: 'List item 2' },
                { id: 3, content: 'List item 3' },
              ]}
              variant="outlined"
              dividers={true}
              hoverable={true}
            />
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-700 dark:text-blue-200">
              List Items with Icons
            </h4>
            <ListGroup>
              <ListItem
                primary="John Doe"
                secondary="john@example.com"
                leftIcon={
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
                rightIcon={
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
              />
              <ListItem
                primary="Jane Smith"
                secondary="jane@example.com"
                leftIcon={
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
                rightIcon={
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
              />
            </ListGroup>
          </div>
        </div>
      );

    case 'grid':
      return (
        <div className="space-y-6">
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-700 dark:text-blue-200">
              Basic Grid
            </h4>
            <Grid columns={3} gap="md">
              <GridItem className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg">
                <p className="text-blue-800 dark:text-blue-200">Grid Item 1</p>
              </GridItem>
              <GridItem className="bg-green-100 dark:bg-green-900 p-4 rounded-lg">
                <p className="text-green-800 dark:text-green-200">
                  Grid Item 2
                </p>
              </GridItem>
              <GridItem className="bg-purple-100 dark:bg-purple-900 p-4 rounded-lg">
                <p className="text-purple-800 dark:text-purple-200">
                  Grid Item 3
                </p>
              </GridItem>
            </Grid>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-700 dark:text-blue-200">
              Flex Grid
            </h4>
            <FlexGrid
              direction="row"
              wrap={true}
              justify="between"
              align="center"
              gap="md"
            >
              <FlexItem className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">Flex Item 1</p>
              </FlexItem>
              <FlexItem className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">Flex Item 2</p>
              </FlexItem>
              <FlexItem className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">Flex Item 3</p>
              </FlexItem>
            </FlexGrid>
          </div>
        </div>
      );

    case 'chart':
      return (
        <div className="space-y-6">
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-700 dark:text-blue-200">
              Bar Chart
            </h4>
            <Chart
              type="bar"
              title="Monthly Sales"
              subtitle="Sales data for the last 6 months"
              data={[
                { label: 'Jan', value: 65 },
                { label: 'Feb', value: 59 },
                { label: 'Mar', value: 80 },
                { label: 'Apr', value: 81 },
                { label: 'May', value: 56 },
                { label: 'Jun', value: 55 },
              ]}
              width={400}
              height={200}
            />
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-700 dark:text-blue-200">
              Pie Chart
            </h4>
            <Chart
              type="pie"
              title="Market Share"
              data={[
                { label: 'Desktop', value: 40 },
                { label: 'Mobile', value: 35 },
                { label: 'Tablet', value: 25 },
              ]}
              width={300}
              height={200}
            />
          </div>
        </div>
      );

    case 'stat':
      return (
        <div className="space-y-6">
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-700 dark:text-blue-200">
              Stat Cards
            </h4>
            <StatGrid columns={4}>
              <Stat
                title="Total Users"
                value="12,345"
                change="+12%"
                changeType="positive"
                trend="up"
                icon={
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
              />
              <Stat
                title="Revenue"
                value="$45,678"
                change="+8%"
                changeType="positive"
                trend="up"
                icon={
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                }
              />
              <Stat
                title="Orders"
                value="1,234"
                change="-3%"
                changeType="negative"
                trend="down"
                icon={
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2L3 7v11a1 1 0 001 1h12a1 1 0 001-1V7l-7-5zM8 15v-3a2 2 0 114 0v3H8z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
              />
              <Stat
                title="Conversion"
                value="3.2%"
                change="0%"
                changeType="neutral"
                trend="stable"
                icon={
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
              />
            </StatGrid>
          </div>
        </div>
      );

    case 'timeline':
      return (
        <div className="space-y-8">
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-blue-100">
              Large Timeline - Enhanced Visibility
            </h4>
            <Timeline
              size="xl"
              variant="elevated"
              items={[
                {
                  id: 1,
                  title: 'Project Started',
                  description: 'Initial project setup and planning phase with team coordination',
                  time: '2 hours ago',
                  status: 'completed',
                  color: 'green',
                  icon: (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ),
                },
                {
                  id: 2,
                  title: 'Design Phase',
                  description: 'Creating comprehensive wireframes and interactive mockups',
                  time: '1 hour ago',
                  status: 'current',
                  color: 'blue',
                  icon: (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  ),
                },
                {
                  id: 3,
                  title: 'Development',
                  description: 'Building the core application with modern technologies',
                  time: 'In progress',
                  status: 'pending',
                  color: 'gray',
                  icon: (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ),
                },
                {
                  id: 4,
                  title: 'Testing & QA',
                  description: 'Comprehensive quality assurance and user acceptance testing',
                  time: 'Pending',
                  status: 'pending',
                  color: 'gray',
                  icon: (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  ),
                },
              ]}
            />
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-blue-100">
              Horizontal Timeline - Different Sizes
            </h4>
            <div className="space-y-4">
              <div>
                <h5 className="text-sm font-medium text-gray-600 dark:text-blue-300 mb-2">Large Size</h5>
                <Timeline
                  orientation="horizontal"
                  size="lg"
                  variant="outlined"
                  items={[
                    {
                      id: 1,
                      title: 'Step 1',
                      description: 'Planning',
                      time: 'Done',
                      status: 'completed',
                      color: 'green',
                    },
                    {
                      id: 2,
                      title: 'Step 2',
                      description: 'Design',
                      time: 'Current',
                      status: 'current',
                      color: 'blue',
                    },
                    {
                      id: 3,
                      title: 'Step 3',
                      description: 'Build',
                      time: 'Next',
                      status: 'pending',
                      color: 'gray',
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      );

    case 'avatar':
      return (
        <div className="space-y-6">
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-700 dark:text-blue-200">
              Avatar Sizes
            </h4>
            <div className="flex items-center space-x-4">
              <Avatar name="John Doe" size="xs" />
              <Avatar name="Jane Smith" size="sm" />
              <Avatar name="Bob Johnson" size="md" />
              <Avatar name="Alice Brown" size="lg" />
              <Avatar name="Charlie Wilson" size="xl" />
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-700 dark:text-blue-200">
              Avatar with Status
            </h4>
            <div className="flex items-center space-x-4">
              <Avatar name="John Doe" status="online" statusColor="green" />
              <Avatar name="Jane Smith" status="away" statusColor="yellow" />
              <Avatar name="Bob Johnson" status="busy" statusColor="red" />
              <Avatar name="Alice Brown" status="offline" statusColor="gray" />
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-700 dark:text-blue-200">
              Avatar Group
            </h4>
            <AvatarGroup max={3}>
              <Avatar name="John Doe" />
              <Avatar name="Jane Smith" />
              <Avatar name="Bob Johnson" />
              <Avatar name="Alice Brown" />
              <Avatar name="Charlie Wilson" />
            </AvatarGroup>
          </div>
        </div>
      );

    case 'rating':
      return (
        <div className="space-y-8">
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-blue-100">
              Star Rating - Extra Large Size
            </h4>
            <div className="p-6 bg-gray-50 dark:bg-slate-700 rounded-lg">
              <RateInput
                name="rating1"
                value={formData.rating1 || 0}
                onChange={handleInputChange}
                max={5}
                size="2xl"
                allowHalf={false}
                showText={true}
                text={['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']}
              />
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-blue-100">
              Star Rating - Different Sizes
            </h4>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
                <h5 className="text-sm font-medium text-gray-600 dark:text-blue-300 mb-3">Extra Large (2XL)</h5>
                <RateInput
                  name="rating2"
                  value={formData.rating2 || 0}
                  onChange={handleInputChange}
                  max={5}
                  size="2xl"
                  allowHalf={true}
                />
              </div>
              <div className="p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
                <h5 className="text-sm font-medium text-gray-600 dark:text-blue-300 mb-3">Extra Large (XL)</h5>
                <RateInput
                  name="rating3"
                  value={formData.rating3 || 0}
                  onChange={handleInputChange}
                  max={5}
                  size="xl"
                  allowHalf={false}
                />
              </div>
              <div className="p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
                <h5 className="text-sm font-medium text-gray-600 dark:text-blue-300 mb-3">Large (L)</h5>
                <RateInput
                  name="rating4"
                  value={formData.rating4 || 0}
                  onChange={handleInputChange}
                  max={5}
                  size="lg"
                  allowHalf={false}
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-blue-100">
              Star Rating - With Labels
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
                <h5 className="text-sm font-medium text-gray-600 dark:text-blue-300 mb-3">Product Rating</h5>
                <RateInput
                  name="rating5"
                  value={formData.rating5 || 0}
                  onChange={handleInputChange}
                  max={5}
                  size="xl"
                  allowHalf={true}
                  showText={true}
                  text={['Terrible', 'Bad', 'OK', 'Good', 'Excellent']}
                />
              </div>
              <div className="p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
                <h5 className="text-sm font-medium text-gray-600 dark:text-blue-300 mb-3">Service Rating</h5>
                <RateInput
                  name="rating6"
                  value={formData.rating6 || 0}
                  onChange={handleInputChange}
                  max={5}
                  size="xl"
                  allowHalf={false}
                  showText={true}
                  text={['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']}
                />
              </div>
            </div>
          </div>
        </div>
      );

    default:
      return <div>Component not found</div>;
  }
};

export default DataDisplayElementRenderer;
