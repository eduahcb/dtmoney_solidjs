import { describe, test, expect } from 'vitest'
import { render, screen } from '@solidjs/testing-library'

import { TableTd } from 'components/molecules/Table'

describe('TableTd component', () => {
  describe('when rendered', () => {
    test('renders table content', () => {
      render(() =>
        <table>
          <tbody>
            <tr>
              <TableTd>name</TableTd>
              <TableTd>description</TableTd>
            </tr>
          </tbody>
        </table>
      )

      expect(screen.getByText('description')).toBeInTheDocument()
      expect(screen.getByText('name')).toBeInTheDocument()
    })
  })
})
