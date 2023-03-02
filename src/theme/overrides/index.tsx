//
import { ThemeOptionsExtended } from '../types';
import { Autocomplete } from './Autocomplete';
import { Backdrop } from './Backdrop';
import { Button } from './Button';
import { Card } from './Card';
import { Input } from './Input';
import { Paper } from './Paper';
import { Table } from './Table';
import { Tooltip } from './Tooltip';
import { Typography } from './Typography';

// ----------------------------------------------------------------------

export const ComponentsOverrides = (theme: ThemeOptionsExtended) =>
  Object.assign(
    Card(theme),
    Table(theme),
    Input(theme),
    Paper(),
    Button(theme),
    Tooltip(theme),
    Backdrop(theme),
    Typography(theme),
    Autocomplete(theme)
  );
