using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ConsoleManager
{
    public class Menu
    {
        public string Selection { get; private set; }
        private int _position;
        private readonly IEnumerable<string> _options;
        public Menu(IEnumerable<string> Options)
        {
            _position = 0;
            _options = Options;
        }

        public string Select()
        {
            Selection = _options.ToArray()[_position];
            return Selection;
        }

        public void Move(MoveDirection direction)
        {
            if (direction == MoveDirection.Down)
            {
                if (_position + 1 > _options.Count() - 1)
                {
                    _position = 0;
                }
                else
                {
                    _position++;
                }
            }
            else
            {
                if (_position - 1 < 0)
                {
                    _position = _options.Count() - 1;
                }
                else
                {
                    _position--;
                }
            }
        }

        public override string ToString()
        {
            var lines = _options.Select((option, index) =>
            {
                if (_position == index)
                {
                    return $"[X] {option}";
                }
                else
                {
                    return $"[ ] {option}";
                }
            });
            return String.Join("\n", lines);
        }
    }
}
