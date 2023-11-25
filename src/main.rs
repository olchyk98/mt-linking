pub mod types;
pub mod setup;
pub mod ui;
pub mod components;

use std::{time::Duration, path::Path};
use crossterm::event::{KeyEventKind, KeyCode};
use setup::{prepare_terminal_exit, get_terminal};
use types::State;
use ui::draw;

fn main () -> std::io::Result<()> {
  let mut application_state = State::default();
  let mut terminal = get_terminal()?;

  application_state.load_root(Path::new("/"))?;

  loop {
    draw(&mut terminal, &mut application_state);


    // TODO: Implement keyboard events on a separate thread.
    if crossterm::event::poll(Duration::from_millis(10))? {
      if let crossterm::event::Event::Key(key) = crossterm::event::read()? {
        if key.kind == KeyEventKind::Press {
          match key.code {
            KeyCode::Up => application_state.move_cursor_up()?,
            KeyCode::Down => application_state.move_cursor_down()?,
            KeyCode::Left => application_state.move_cursor_left()?,
            KeyCode::Right => application_state.move_cursor_right()?,
            KeyCode::Char('q') => break,
            _ => break,
          }
        }
      }
    }
  }


  prepare_terminal_exit()?;
  Ok(())
}

