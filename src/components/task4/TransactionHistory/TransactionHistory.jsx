import { TableHead } from '../TableHead/TableHead';
import { TableBody } from '../TableBody/TableBody';
import { Table } from './TransactionHistory.styled';
import transactions from '../../data/transactions';
import PropTypes from 'prop-types';

export const TransactionHistory = () => {
  return (
    <Table>
      <TableHead />
      <TableBody items={transactions} />
    </Table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};
